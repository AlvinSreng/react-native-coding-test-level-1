import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen, MainScreen } from "./src/screens";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{ headerBackTitle: "", headerTruncatedBackTitle: "" }}
      >
        <Stack.Screen
          component={MainScreen}
          name="MainScreen"
          options={{ title: "Main Screen" }}
        />
        <Stack.Screen
          component={RegisterScreen}
          name="Register"
          options={{ title: "Register" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
