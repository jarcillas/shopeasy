import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "../styles";

const ItemScreen = ({ navigation, route }) => {
  const { item, index, handleDeleteItem, handleUpdateItem } = route.params;
  const [titleInput, setTitleInput] = useState(item.title);

  return (
    <View>
      <TextInput
        value={titleInput}
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
  );
};

export default ItemScreen;
