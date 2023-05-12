import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, FlatList } from "react-native";
import styles from "../styles";
import ShoppingItem from "./ShoppingItem";

function HomeScreen({ navigation }) {
  const [shoppingList, setShoppingList] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [valueInput, setValueInput] = useState("");

  const valueInputRef = useRef(null);
  const itemInputRef = useRef(null);

  const handleSubmitItem = item => {
    setShoppingList(list => {
      const currentList = [...list];
      currentList.push(item);
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
  };

  const handleDeleteItem = idx => {
    const currentList = [...shoppingList];
    currentList.splice(idx, 1);
    setShoppingList(currentList);
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
          <TextInput
            style={styles.itemInput}
            ref={itemInputRef}
            placeholder="Enter an item..."
            value={itemInput}
            onChangeText={text => {
              setItemInput(text);
            }}
            returnKeyType="next"
            onSubmitEditing={() => {
              if (itemInput !== "") {
                valueInputRef.current.focus();
              }
            }}
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
