import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, FlatList } from "react-native";
import styles from "../styles";

function HomeScreen() {
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

  const totalValue = shoppingList.reduce((prev, curr) => {
    return prev + Number(curr.value);
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
            placeholder="amount"
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
              <View
                key={index}
                style={[
                  styles.shoppingItem,
                  index % 2 ? styles.shoppingItemEven : styles.shoppingItemOdd,
                  index === 0 ? styles.shoppingItemFirst : {},
                  index === shoppingList.length - 1
                    ? styles.shoppingItemLast
                    : {},
                ]}
              >
                <Text
                  style={[
                    styles.shoppingItemText,
                    index % 2
                      ? styles.shoppingItemTextEven
                      : styles.shoppingItemTextOdd,
                  ]}
                >
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.shoppingItemAmount,
                    index % 2
                      ? styles.shoppingItemTextEven
                      : styles.shoppingItemTextOdd,
                  ]}
                >
                  {formatter.format(item.value)}
                </Text>
              </View>
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
      <View style={styles.totalContainer}>
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
