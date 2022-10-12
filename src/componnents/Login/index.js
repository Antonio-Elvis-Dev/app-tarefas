import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {

const [type, setType] = useState('login')

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


function handleLogin(){
    alert("testee")
}

  return (
    <SafeAreaView style={styles.container}>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="*******"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={[styles.handleLogin, {backgroundColor: type === 'login'?'#3ea6f2':'#141414'}]}
      onPress={handleLogin}
      >
        <Text style={styles.loginText}>
            
            {type === 'login' ? 'Acessar':'Cadastrar'}
            
            </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setType(type => type === 'login'?'cadastrar':'login')}>
        <Text style={{ textAlign: "center" }}>{type === 'login'?'Criar Conta':'Já possuo uma conta!'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: "#f2f6fc",
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: "#121212",
  },
  handleLogin: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    height: 45,
    borderRadius: 4,
  },
  loginText: {
    color: "#fff",
    fontSize:17
  },
});
