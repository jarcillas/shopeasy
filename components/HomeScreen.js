import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, TextInput } from "react-native";
import styles from "../styles";

function HomeScreen() {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headline}>Shopping List</Text>
        <TextInput style={styles.itemInput} placeholder="Enter an item..." />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
