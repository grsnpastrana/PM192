
/* zona 1, aqui van importaciones  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

const Texto=(props)=>{
  const{contenido}=props
  return(<Text>{contenido}</Text>) 
}

/* zona 2 , el main*/
export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenido="hola"></Texto>
      <Texto contenido="mundo"></Texto>
      <Texto contenido="React Native"></Texto>
      <Text>Hola mundo React Native</Text>
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
});
