import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskList({data}){ // desconstruindo a props e chamando a data tireto
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Ola mundo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        backgroundColor:'#121212',
        alignItems:"center",
        marginBottom:10,
        padding:10,
        borderRadius:4
    },
    text:{
        color:'#fff'
    }
})