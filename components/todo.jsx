import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TodoDetails({ navigation, route }) {
  const { todo, setTodos } = route.params;

  const handleDone = () => {
    todo.completed = true;
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? todo : t))
    );
    navigation.goBack();
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text
          style={{
            fontFamily: "Poppins-Black",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Task:
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 28,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          {todo.title}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Black",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Description:
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 18,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          {todo.description}
        </Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={handleDelete}
            style={[styles.deleteBtn, { borderRadius: 8 }]}
          >
            <Text style={styles.textInsideButton}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDone}
            style={[styles.doneBtn, { borderRadius: 8 }]}
          >
            <Text style={styles.textInsideButton}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    backgroundColor: "#faf0e6",
    alignItems: "center",
    height: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 10,
    marginTop: 20,
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
  textInsideButton: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  doneBtn: {
    backgroundColor: "#5f8a74",
    padding: 10,
    width: 100,
    marginBottom: 20,
  },
  deleteBtn: {
    backgroundColor: "#8a5f5f",

    padding: 10,

    width: 100,
    marginBottom: 20,
  },
});
