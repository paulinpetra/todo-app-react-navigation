import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";

export default function AddTodoScreen({ navigation, route }) {
  const { setTodos } = route.params;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      Alert.alert("Error", "Please enter both title and description");
      return;
    }

    const newTodo = {
      title: title,
      description: description,
      date: new Date().toLocaleDateString(),
      id: Date.now(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleAddTodo}>
          <Text>Done</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, title, description]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 28,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          New Todo
        </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="enter todo"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#4c518f"
          />
          <TextInput
            style={styles.input}
            placeholder="enter description"
            value={description}
            onChangeText={setDescription}
            placeholderTextColor="#4c518f"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#faf0e6",
    alignItems: "center",
    height: "100%",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    width: 180,
    backgroundColor: "white",
    borderRadius: 10,
  },
  contentContainer: {
    width: "85%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 60,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
});
