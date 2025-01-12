import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Index() {
  const [todos, setTodos] = useState([
    { id: 1, title: "hello", completed: false },
  ]);
  const [currTodo, setCurrTodo] = useState("");

  const addTodo = () => {
    if (currTodo.trim()) {
      const id = todos.length > 0 ? todos[0].id + 1 : 1;
      setTodos((prevTodos) => [
        {
          id,
          title: currTodo,
          completed: false,
        },
        ...prevTodos,
      ]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text
        style={[styles.todoText, item.completed && styles.completedText]}
        onPress={() => toggleTodo(item.id)}
      >
        {item.title}
      </Text>
      <Pressable onPress={() => removeTodo(item.id)}>
        <MaterialCommunityIcons
          name="delete-circle"
          size={36}
          color="red"
          selectable={undefined}
        />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          placeholderTextColor="gray"
          value={currTodo}
          onChangeText={setCurrTodo}
        />
        <Pressable onPress={addTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(todo) => todo.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    width: "100%",
    maxWidth: 1024,
    marginHorizontal: "auto",
    pointerEvents: "auto",
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    fontSize: 18,
    minWidth: 0,
    color: "white",
  },
  addButton: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    fontSize: 18,
    color: "black",
  },
});
