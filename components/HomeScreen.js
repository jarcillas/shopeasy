import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, FlatList } from "react-native";
import styles from "../styles";

function HomeScreen() {
  const [shoppingList, setShoppingList] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [valueInput, setValueInput] = useState("");

  const handleSubmitItem = item => {
    setShoppingList(list => {
      const currentList = [...list];
      currentList.push(item);
      return currentList;
    });
    console.log("Added new item:", item);
    console.log("New shopping list:", shoppingList);
    setItemInput("");
  };

  const totalValue = shoppingList.reduce((prev, curr) => {
    return prev + curr.value;
  }, 0);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headline}>Shopping List</Text>
      <View style={styles.itemInputContainer}>
        <TextInput
          style={styles.itemInput}
          placeholder="Enter an item..."
          value={itemInput}
          onChangeText={text => {
            setItemInput(text);
          }}
          onSubmitEditing={() =>
            handleSubmitItem({ title: itemInput, value: valueInput })
          }
        />
        <TextInput
          style={styles.valueInput}
          value={valueInput}
          placeholder="20.00"
          inputMode="decimal"
          onChangeText={value => {
            setValueInput(Number(value));
          }}
          onSubmitEditing={() =>
            handleSubmitItem({ title: itemInput, value: valueInput })
          }
        />
      </View>
      <FlatList
        data={shoppingList}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={[
              styles.shoppingItem,
              {
                backgroundColor: index % 2 ? "white" : "#eaeaea",
              },
            ]}
          >
            <Text style={styles.shoppingItemText}>{item.title}</Text>
          </View>
        )}
        style={{ flex: 1, backgroundColor: "red" }}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmountText}>PHP {totalValue}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
