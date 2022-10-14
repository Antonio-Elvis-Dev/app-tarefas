import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Login from "./src/componnents/Login";
import TaskList from "./src/componnents/TaskList";

import { StatusBarHeight } from "./src/componnents/layout";

let tasks = [
  { key: "1", nome: "Comprar Coca" },
  { key: "2", nome: "Estudar" },
];

export default function App() {
  const [user, setUser] = useState(null);

  const [newTask, setNewTask] = useState("");

  if (!user) {
    return <Login changeStatus={(user) => setUser(user)} />;
  }

  return (
    <SafeAreaView style={[styles.container, { marginTop: StatusBarHeight }]}>
      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="Proxima tarefa"
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <TaskList data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: "#f2f6fc",
  },
  containerTask: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#141414",
    height: 45,
  },
  buttonAdd: {
    backgroundColor: "#141414",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 22,
  },
});
