import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";

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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
