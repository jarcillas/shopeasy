import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    padding: 30,
    paddingBottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
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
    marginTop: 10,
    marginBottom: 10,
  },
  totalText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  totalAmountText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
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
    borderBottomColor: "#bebebe",
    borderBottomWidth: 1,
    width: "100%",
    fontSize: 16,
  },
  valueInput: {
    width: 80,
    borderColor: "#bebebe",
    borderWidth: 1,
    fontSize: 16,
    textAlign: "right",
    paddingHorizontal: 10,
  },
  shoppingItem: {
    width: "100%",
    padding: 10,
  },
  shoppingItemText: {
    fontSize: 16,
  },
});

export default styles;
