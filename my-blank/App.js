
/* zona 1, aqui van importaciones  */
import { StatusBar } from 'expo-status-bar';
import { Children } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';

const Texto=()=>{
  const[contenido, setContenido]=useState('hola mundo React')
  const actualizarTexto=()=>{setContenido('estado actualizado')}
  return(
  <Text style={styles.Text}onPress={actualizarTexto}>{contenido}</Text>
) 
}

/* zona 2 , el main*/
export default function App() {
  return (
    <View style={styles.container}>
      <Texto>  </Texto>
      <Texto> </Texto>
      <Texto> </Texto>
      <Button title='Presioname!'></Button>
      <StatusBar style="auto" />
    </View>
  );
}


/* zona 3, estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  Text:{
    color:'red',
    fontSize:25,
  },
});
