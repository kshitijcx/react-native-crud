import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [todos, setTodos] = useState([]);
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

  return (
    <SafeAreaView>
      <View>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}
