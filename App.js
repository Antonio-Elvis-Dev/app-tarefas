import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";

import Login from "./src/componnents/Login";
import TaskList from "./src/componnents/TaskList";
import firebase from "./src/services/firebaseConnection";
import { StatusBarHeight } from "./src/componnents/layout";

// let tasks = [
//   { key: "1", nome: "Comprar Coca" },
//   { key: "2", nome: "Estudar" },
// ];

export default function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    function getUser() {
      if (!user) {
        return;
      }
      firebase
        .database()
        .ref("terefas")
        .child(user)
        .once("value", (snapshot) => {
          setTasks([]);

          snapshot?.forEach((childItem) => {
            let data = {
              key: childItem.key,
              name: childItem.val().nome,
            };
            setTasks(oldTasks=>[...oldTasks, data])
          });
        });
    }
    getUser()
  }, [user]);
  function handleDelete(key) {
    console.log(key);
  }

  function handleEdit(data) {
    console.log("clicado", data);
  }

  function handleAdd() {
    if (newTask === "") {
      return;
    }
    let tarefas = firebase.database().ref("terefas").child(user);
    let chave = tarefas.push().key;

    tarefas
      .child(chave)
      .set({
        nome: newTask,
      })
      .then(() => {
        const data = {
          key: chave,
          name: newTask,
        };
        setTasks((oldTasks) => [...oldTasks, data]);
      });
    Keyboard.dismiss();
    setNewTask("");
  }

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
          value={newTask}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TaskList
            data={item}
            deleteItem={handleDelete}
            editItem={handleEdit}
          />
        )}
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
