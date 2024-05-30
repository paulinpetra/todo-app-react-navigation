import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SectionList,
} from "react-native";

export default function HomeScreen({ navigation, todos, setTodos }) {
  // Filtering todos into active and completed tasks

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  // Function to toggle the completion status of a task

  const toggleDone = (todo) => {
    todo.completed = !todo.completed;
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? todo : t))
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/todoimage.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.welcomeTextContainer}>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 28,
              textAlign: "center",
              marginBottom: 24,
              textShadowColor: "#fff",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            Join thousands of others in achieving their goals with the Task
            Planner!
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 18,
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            What do you need to do today?{" "}
          </Text>
        </View>

        <View style={styles.activeTasksContainer}>
          <Text
            style={{
              fontFamily: "Poppins-Black",
              fontSize: 18,
              textAlign: "center",
              marginBottom: 24,
              textDecorationLine: "underline",
            }}
          >
            My Active Tasks:
          </Text>
          <FlatList
            data={activeTodos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() =>
                    navigation.navigate("Todo Details", {
                      todo: item,
                      setTodos,
                    })
                  }
                >
                  <View>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <Text>{item.description}</Text>
                  </View>
                  <TouchableOpacity onPress={() => toggleDone(item)}>
                    <Text>☑️</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </>
            )}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text
            style={{
              fontFamily: "Poppins-Black",
              fontSize: 18,
              textAlign: "center",
              marginBottom: 24,
              textDecorationLine: "underline",
            }}
          >
            My Completed Tasks:
          </Text>
          <SectionList
            sections={[{ title: "Completed", data: completedTodos }]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.completedTaskContainer}>
                <Text style={styles.completedTitle}>
                  <View>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <Text style={styles.descriptionText}>
                      {item.description}
                    </Text>
                  </View>
                </Text>
                <TouchableOpacity onPress={() => toggleDone(item)}>
                  <Text style={styles.greenCheck}>✅</Text>
                </TouchableOpacity>
              </View>
            )}
          ></SectionList>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  welcomeTextContainer: {
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },

  listItem: {
    marginHorizontal: 20,

    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#444",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    backgroundColor: "#fff",

    borderRadius: 8,
  },
  activeTasksContainer: {
    width: "95%",
    alignSelf: "center",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  completedTitle: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  sectionContainer: {
    paddingTop: 40,
    justifyContent: "center",
    alignContent: "center",
  },
  greenCheck: {
    color: "#0F0",
    justifyContent: "center",
    alignContent: "center",
  },
  completedTaskContainer: {
    marginHorizontal: 30,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",

    height: 90,
    borderRadius: 8,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
