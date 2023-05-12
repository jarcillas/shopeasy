import { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, FlatList } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import ShoppingItem from "./ShoppingItem";
import { customDataSet } from "../constants/prices";
import Feather from "react-native-vector-icons/Feather";
Feather.loadFont();

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@ShopEasy:shoppingList");
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
  }
};

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@ShopEasy:shoppingList", jsonValue);
    console.log("storing shoppingList to asyncstorage", value);
  } catch (e) {
    // saving error
  }
};

function HomeScreen({ navigation }) {
  const [shoppingList, setShoppingList] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [valueInput, setValueInput] = useState("");

  const valueInputRef = useRef(null);
  const itemInputRef = useRef(null);

  useEffect(() => {
    getData()
      .then(res => {
        console.log("getting values from asyncstorage", res);
        setShoppingList(res || []);
      })
      .catch(e => {
        console.log("error", e);
      });
  }, []);

  const handleSubmitItem = item => {
    setShoppingList(list => {
      const currentList = [...list];
      currentList.push(item);
      storeData(currentList);
      return currentList;
    });
    console.log("Added new item:", item);
    console.log("New shopping list:", shoppingList);
    setItemInput("");
    setValueInput("");
  };

  const handleUpdateItem = (idx, updatedItem) => {
    const currentList = [...shoppingList];
    currentList.splice(idx, 1, updatedItem);
    setShoppingList(currentList);
    storeData(currentList);
  };

  const handleDeleteItem = idx => {
    const currentList = [...shoppingList];
    currentList.splice(idx, 1);
    setShoppingList(currentList);
    storeData(currentList);
  };

  const totalValue = shoppingList.reduce((prev, curr) => {
    return prev + curr.value * curr.qty - curr.discount + curr.surcharge;
  }, 0);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
    currencyDisplay: "narrowSymbol",
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.innerContainer}>
        <View style={styles.itemInputContainer}>
          <AutocompleteDropdown
            ref={itemInputRef}
            textInputProps={{
              placeholder: "Enter an item...",
              style: {
                flex: 1,
                width: "100%",
                fontSize: 20,
                color: "#003049",
                fontWeight: "500",
                includeFontPadding: false,
                paddingHorizontal: 0,
                margin: 0,
                textAlignVertical: "bottom",
              },
              returnKeyType: "next",
              placeholderTextColor: "#006399",
            }}
            onSelectItem={item => {
              console.log("selected:", item);
              if (item) {
                setItemInput(item.title);
                setValueInput(item.value.toFixed(2));
                valueInputRef.current.focus();
              }
            }}
            onClear={() => {
              setValueInput("");
            }}
            onChangeText={text => {
              setItemInput(text);
            }}
            onSubmit={() => {
              if (itemInput !== "") {
                valueInputRef.current.focus();
              }
            }}
            inputHeight={28}
            inputContainerStyle={{
              backgroundColor: null,
              padding: 0,
              borderRadius: 0,
              borderBottomColor: "#003049",
              borderBottomWidth: 2,
            }}
            suggestionsListContainerStyle={{
              opacity: 1,
              zIndex: 10,
            }}
            containerStyle={{
              flex: 1,
              marginBottom: 0,
            }}
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            dataSet={customDataSet}
            ChevronIconComponent={
              <Feather name="chevron-down" size={20} color="#003049" />
            }
            ClearIconComponent={<Feather name="x" size={18} color="#003049" />}
          />
          <TextInput
            style={styles.valueInput}
            value={valueInput}
            ref={valueInputRef}
            placeholder="Amount"
            inputMode="decimal"
            onChangeText={value => {
              setValueInput(value);
            }}
            placeholderTextColor="#006399"
            onSubmitEditing={() => {
              if (itemInput !== "" && valueInput !== "") {
                handleSubmitItem({
                  title: itemInput,
                  value: Number(valueInput),
                  qty: 1,
                  discount: 0,
                  surcharge: 0,
                });
                itemInputRef.current.focus();
              }
            }}
          />
        </View>
        {shoppingList.length > 0 && (
          <FlatList
            data={shoppingList}
            renderItem={({ item, index }) => (
              <ShoppingItem
                shoppingList={shoppingList || []}
                handleDeleteItem={handleDeleteItem}
                item={item}
                index={index}
                navigation={navigation}
                handleUpdateItem={handleUpdateItem}
              />
            )}
            style={{ flex: 1 }}
          />
        )}
        {!shoppingList.length && (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>No items added.</Text>
          </View>
        )}
      </View>
      <View style={[styles.footerContainer, styles.totalContainer]}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmountText}>
          {formatter.format(totalValue)}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
