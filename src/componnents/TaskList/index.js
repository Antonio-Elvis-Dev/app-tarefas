import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskList({data}){ // desconstruindo a props e chamando a data tireto
    return(
        <View>
            <Text>{data.nome}</Text>
        </View>
    )
}