import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import HomeScreen from "./components/home";
import AddTodoScreen from "./components/add";
import TodoDetails from "./components/todo";
import { useState } from "react";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/Poppins-Regular.ttf"),
    // "Poppins-Medium": require("../assets//Poppins-Medium.ttf"),
    "Poppins-Black": require("./assets/Poppins-Black.ttf"),
  });
  const [todos, setTodos] = useState([]);

  return (
    //wrapping the whole app in the NavigationContainer

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todo App"
          options={({ navigation }) => ({
            title: "Home",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Add Todo", { setTodos })} // Navigating to the add modal and passing the setTodos function
              >
                <Text>Add</Text>
              </TouchableOpacity>
            ),
          })}
        >
          {(props) => (
            <HomeScreen {...props} todos={todos} setTodos={setTodos} /> // Passing props to the HomeScreen component
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Add Todo"
          component={AddTodoScreen} // Component to render for this screen
          options={{ presentation: "modal", title: "Add Todo" }}
        />
        <Stack.Screen
          name="Todo Details"
          component={TodoDetails}
          options={{ title: "Todo Details" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
