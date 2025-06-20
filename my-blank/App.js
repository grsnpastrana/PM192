/* Zone 1: Importaciones */
import { ImageBackground, StyleSheet, Text, TextInput, Button, Alert, View, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';



/* Zone 2: Main */

export default function App() {
  const [nombre, setNombre] = useState('');

  const mostrarAlerta=()=>{
    if (nombre.trim()===''){
      Alert.alert('error, por favor escribe algo ');
      alert('Escribe algo')
    } else {
      Alert.alert('Bienvenido', `hola ${nombre}, bienvnido a nuestra app`);
      alert('hola'+ nombre+ 'bienvenido');

    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingresa tu nombre</Text>
      <TextInput style={styles.input}
      placeholder='Escribe tu nombre'
      onChangeText={setNombre}
      value={nombre}
      ></TextInput>

      <Button title='Enviar'onPress={mostrarAlerta}></Button>

    </View>
  );
}

/* Zone 3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    padding:20,
    backgroundColor:'white'
  },
  text:{
    fontSize:18,
    marginBottom:20,
    color:'#000',
  },
  input:{
    borderWidth: 1,
    borderColor:'#ccc',
    padding: 10,
    marginBottom:20,
  }

});
