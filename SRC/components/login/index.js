import React from 'react';

import {View, TextInput, StyleSheet} from 'react-native';

export default function()
{
    return(
        <View>
            <TextInput style={style.backgroud}/>
            <TextInput style={style.backgroud}/>
        </View>
    ) 
};
const style = StyleSheet.create({
    backgroud:{
        backgroundColor:'#F0FFFF',
        borderColor:'#ADD8E6',
        fontSize:32,
        borderWidth:2,
        borderRadius:10,
        color:'red',
        margin:20,
        
    }
});


