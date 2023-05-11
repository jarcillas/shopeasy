import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, TextInput } from "react-native";
import styles from "../styles";

function HomeScreen() {
  const [shoppingList, setShoppingList] = useState([]);
  const [itemInput, setItemInput] = useState("");

  const handleSubmitItem = item => {
    setShoppingList(list => [...list, item]);
    setItemInput("");
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headline}>Shopping List</Text>
      <TextInput
        style={styles.itemInput}
        placeholder="Enter an item..."
        value={itemInput}
        onChangeText={text => {
          setItemInput(text);
        }}
        onSubmitEditing={() => handleSubmitItem(itemInput)}
      />
      <ScrollView contentContainerStyle={styles.listContainer}>
        {shoppingList.map((item, idx) => (
          <View key={idx} style={styles.shoppingItem}>
            <Text style={styles.shoppingItemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmountText}>PHP 2,000.00</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
