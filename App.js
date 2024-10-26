import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image, Dimensions,Text } from 'react-native';
import Tela_login from './SRC/components/inputs/index'
import Botao from './SRC/components/button/button';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.body1}>
           <ImageBackground>
           <Image style={styles.Image2}
            source={require('./assets/images/login.jpeg')}/>
           <Text style={styles.titulo}>Bem-vindo(a) a barbearia</Text>
           <Text style={styles.texto2}>Para continuar, insira suas credenciais!</Text>
           </ImageBackground> 
           
        </View>
        <View style={styles.body2}>
          <Tela_login/>
        </View>
        <View style={styles.body3}>
        <Botao/>
        <Text>Esqueceu a senha? <Text style={styles.texto3} >Clique aqui!</Text></Text>
        </View>
        
          <Text>Facimp Wyden</Text>
        
    </View>
      
    
  
)};
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    
    
  },
  body1:{
    height:Dimensions.get('window').height/3,
    width:'100%',
//    backgroundColor:'blue',
    alignContent:'center',
    justifyContent:'center',
  },
  body2:{
    width:'100%',
    height:Dimensions.get('window').height/4,
   // backgroundColor:'red'
  },
  body3:{
    width:'100%',
    height:Dimensions.get('window').height/3,
    alignItems:'center'
    //backgroundColor:'green'
  },
  Image2:{   
    height:150,
    width:150,
    marginLeft:100   
  },
  titulo:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center'    
  },
  texto2:{
    textAlign:'center'
  },
  texto3:{
    color:'blue',
    fontWeight:'bold' 
  }


});


