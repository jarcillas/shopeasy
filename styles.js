import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "stretch",
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
});

export default styles;
