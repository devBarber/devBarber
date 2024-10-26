import React, {useState} from 'react';

import {View, TextInput, StyleSheet, Alert} from 'react-native';

export default function(){
    return(
        <View>
            <TextInput
            placeholder='Email'
            style={style.backgroud}
            />
            
            <TextInput 
            placeholder='Senha' 
            style={style.backgroud}
            />
        </View>
    ) 
};
const style = StyleSheet.create({
    backgroud:{
        //backgroundColor:'#F0FFFF',
        borderColor:'#808080',
        fontSize:14,
        borderWidth:2,
        borderRadius:10,
        margin:20,
        height:50,
        padding:15
        
    }
});


