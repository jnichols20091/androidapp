import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  SafeAreaView
} from 'react-native';

export default function App1() {

  return (
    <View style= {styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput
          placeholder = "Task List"
          style = {styles.input}
        />
        <Button title = "+"/> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderColor:"black", 
    borderWidth:1 , 
    padding :20,
  },
  inputContainer :{
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center',
    bottom:20
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri:
            'androidapp\assets\background.jpg',
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>
             React Native Background Image Example
          </Text>
          <View style={styles.contentCenter}>
            <Image
              source={{
                uri:
                  'androidapp\assets\background.jpg',
              }}
              style={{
                width: 60,
                height: 60,
                marginTop: 100
              }}
            />
            <Text style={styles.textStyle}>
              The Big Bang Theory
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',    
    textAlign: 'center',    
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
  }
});