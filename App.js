import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import ItemScreen from "./components/ItemScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "ShopEasy",
            headerStyle: {
              backgroundColor: "#003049",
            },
            headerTitleStyle: {
              color: "#fdf0d5",
            },
            headerTintColor: "#fdf0d5",
          }}
        />
        <Stack.Screen
          name="Item"
          component={ItemScreen}
          options={{
            title: "Edit Item",
            headerStyle: {
              backgroundColor: "#003049",
            },
            headerTitleStyle: {
              color: "#fdf0d5",
            },
            headerTintColor: "#fdf0d5",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
