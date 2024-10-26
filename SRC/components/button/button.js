import React from "react";
import { TouchableOpacity,Text, StyleSheet } from "react-native";

export default function Botao(){
    
    
    return(
        <>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        </>
    )
};
const styles = StyleSheet.create({

    button: {
        width:'60%',
        height: 50,
        backgroundColor: '#F49811',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10,
      },
      buttonText: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
      },
});