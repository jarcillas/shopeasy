import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";

const ItemScreen = ({ navigation, route }) => {
  const { item, index, handleDeleteItem, handleUpdateItem } = route.params;
  const [titleInput, setTitleInput] = useState(item.title);

  return (
    <View style={styles.wrapper}>
      <View style={styles.innerContainer}>
        <TextInput
          value={titleInput}
          style={styles.headline}
          onChangeText={text => {
            setTitleInput(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            const newItem = { ...item, title: titleInput };
            handleUpdateItem(index, newItem);
            navigation.goBack();
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleDeleteItem(index);
            navigation.goBack();
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default ItemScreen;
