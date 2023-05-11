import { StyleSheet } from "react-native";

const primaryColor = "#003049";
const secondaryColor = "#fdf0d5";
const tertiaryColor = "#669bbc";
const redColor = "#c1121f";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: "black",
    // backgroundColor: "#dddddd",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: tertiaryColor,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  listContainer: {
    marginTop: 0,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    width: "100%",
    // marginTop: 10,
    // marginBottom: 10,
    backgroundColor: primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  totalText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: secondaryColor,
  },
  totalAmountText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    color: secondaryColor,
  },
  headline: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  itemInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    columnGap: 10,
  },
  itemInput: {
    flex: 1,
    borderBottomColor: primaryColor,
    borderBottomWidth: 2,
    width: "100%",
    fontSize: 20,
    color: primaryColor,
    fontWeight: "500",
  },
  valueInput: {
    width: 100,
    borderBottomColor: primaryColor,
    borderBottomWidth: 2,
    fontSize: 20,
    textAlign: "right",
    paddingHorizontal: 10,
    color: primaryColor,
    fontWeight: "500",
  },
  shoppingItem: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 6,
  },
  shoppingItemDelete: {
    color: redColor,
    fontWeight: "bold",
    fontSize: 16,
  },
  shoppingItemOdd: {
    backgroundColor: primaryColor,
  },
  shoppingItemEven: {
    backgroundColor: secondaryColor,
  },
  shoppingItemFirst: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  shoppingItemLast: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  shoppingItemText: {
    flex: 1,
    fontSize: 16,
  },
  shoppingItemTextOdd: {
    color: secondaryColor,
  },
  shoppingItemTextEven: {
    color: primaryColor,
  },
  shoppingItemAmount: {
    fontSize: 16,
    textAlign: "right",
    // paddingHorizontal: 10,
  },
});

export default styles;
