import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const ShoppingItem = props => {
  const {
    shoppingList,
    item,
    index,
    handleDeleteItem,
    handleUpdateItem,
    navigation,
  } = props;
  const [show, setShow] = useState(false);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
    currencyDisplay: "narrowSymbol",
  });

  const handleNavigate = () => {
    console.log("navigating to ItemScreen");
    navigation.push("Item", {
      item: item,
      index: index,
      handleUpdateItem,
      handleDeleteItem,
    });
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <TouchableOpacity
      key={index}
      onPress={() => {
        console.log(`show ${index} set to ${!show}`);
        setShow(!show);
      }}
    >
      <View
        style={[
          styles.shoppingItem,
          index % 2 ? styles.shoppingItemEven : styles.shoppingItemOdd,
          index === 0 ? styles.shoppingItemFirst : {},
          index === shoppingList.length - 1 ? styles.shoppingItemLast : {},
        ]}
      >
        {show ? (
          <>
            <TouchableOpacity onPress={handleNavigate}>
              <Text
                style={[
                  styles.shoppingItemEdit,
                  index % 2
                    ? styles.shoppingItemTextEven
                    : styles.shoppingItemTextOdd,
                ]}
              >
                Edit Item
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log(`Deleting item ${index}`);
                handleDeleteItem(index);
                setShow(false);
              }}
            >
              <Text style={[styles.shoppingItemDelete]}>Delete</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text
              style={[
                styles.shoppingItemText,
                index % 2
                  ? styles.shoppingItemTextEven
                  : styles.shoppingItemTextOdd,
              ]}
            >
              {item.title} ({item.qty})
            </Text>
            <Text
              style={[
                styles.shoppingItemAmount,
                index % 2
                  ? styles.shoppingItemTextEven
                  : styles.shoppingItemTextOdd,
              ]}
            >
              {formatter.format(
                item.value * item.qty - item.discount + item.surcharge,
              )}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingItem;
