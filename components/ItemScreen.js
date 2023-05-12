import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";

const ItemScreen = ({ navigation, route }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const { item, index, handleDeleteItem, handleUpdateItem } = route.params;
  const [titleInput, setTitleInput] = useState(item.title);
  const [valueInput, setValueInput] = useState(formatter.format(item.value));
  const [discountInput, setDiscountInput] = useState(formatter.format(0));
  const [surchargeInput, setSurchargeInput] = useState(formatter.format(0));

  return (
    <View style={styles.wrapper}>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <TextInput
            value={titleInput}
            style={styles.titleInputField}
            onChangeText={text => {
              setTitleInput(text);
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.inputLabel}>Base Price</Text>
          <TextInput
            value={valueInput}
            inputMode="decimal"
            style={styles.inputField}
            onChangeText={text => {
              setValueInput(text);
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={[styles.inputLabel, styles.subInputLabel]}>
            Discount
          </Text>
          <TextInput
            value={discountInput}
            inputMode="decimal"
            style={styles.inputField}
            onChangeText={text => {
              setDiscountInput(text);
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={[styles.inputLabel, styles.subInputLabel]}>
            Surcharge
          </Text>
          <TextInput
            value={surchargeInput}
            inputMode="decimal"
            style={styles.inputField}
            onChangeText={text => {
              setSurchargeInput(text);
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.inputLabel}>Net Price</Text>
          <Text style={styles.inputField}>
            {formatter.format(valueInput - discountInput + surchargeInput)}
          </Text>
        </View>
      </View>
      <View style={[styles.footerContainer, styles.buttonContainer]}>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={() => {
            const newItem = {
              ...item,
              title: titleInput,
              value: Number(valueInput),
              discount: Number(discountInput),
              surcharge: Number(surchargeInput),
            };
            handleUpdateItem(index, newItem);
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => {
            handleDeleteItem(index);
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default ItemScreen;
