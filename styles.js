import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    padding: 30,
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 20,
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
  itemInput: {
    marginVertical: 15,
    borderBottomColor: "#bebebe",
    borderBottomWidth: 1,
    width: "100%",
    fontSize: 16,
  },
  shoppingItem: {
    width: "100%",
    padding: 10,
  },
  shoppingItemText: {
    fontStyle: "bold",
    fontSize: 20,
  },
});

export default styles;
