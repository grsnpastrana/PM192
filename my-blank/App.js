// RegistroUsuario.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

export default function RegistroUsuario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const manejarRegistro = () => {
    if (!nombre.trim() || !correo.trim()) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones.");
      return;
    }

    Alert.alert("Registro exitoso", `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  return (
        <ImageBackground
          source={require('./assets/fondo.jpg')}
          style={estilos.fondo}
          resizeMode="cover"
        >

      <ScrollView contentContainerStyle={estilos.scroll}>
        <View style={estilos.container}>
          {/* Logo */}
          <Image
            source={require('./assets/fondo.jpg')}
            style={estilos.logo}
          />

          <Text style={estilos.titulo}>Registro de Usuario</Text>

          {/* Campos */}
          <TextInput
            placeholder="Nombre completo"
            style={estilos.input}
            value={nombre}
            onChangeText={setNombre}
            placeholderTextColor="#6b7280"
          />
          <TextInput
            placeholder="Correo electrónico"
            style={estilos.input}
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#6b7280"
          />

          {/* Switch de términos */}
          <View style={estilos.switchContainer}>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              thumbColor={aceptaTerminos ? "#00996b" : "#ccc"}
            />
            <Text style={estilos.switchTexto}>
              Acepto los términos y condiciones
            </Text>
          </View>

          {/* Botón */}
          <TouchableOpacity style={estilos.boton} onPress={manejarRegistro}>
            <Text style={estilos.textoBoton}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    backgroundColor: "rgba(255,255,255,0.9)",
    margin: 20,
    padding: 20,
    borderRadius: 16,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#94a3b8",
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    color: "#0f172a",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    gap: 8,
  },
  switchTexto: {
    color: "#334155",
    flex: 1,
  },
  boton: {
    backgroundColor: "#00996b",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
