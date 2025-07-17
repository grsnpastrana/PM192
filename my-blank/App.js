import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";

const API_KEY = "TU_API_KEY_AQUÍ"; // Pon aquí tu API key real

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  // Buscar ciudades para sugerencias desde API geocoding
  const fetchCitySuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    setLoadingSuggestions(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        setSuggestions(
          data.map((item) => ({
            name: item.name,
            country: item.country,
            lat: item.lat,
            lon: item.lon,
          }))
        );
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      setSuggestions([]);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  // Maneja cambio en input, llama sugerencias dinámicas
  const onCityChange = (text) => {
    setCity(text);
    fetchCitySuggestions(text);
  };

  // Cuando selecciona ciudad de la lista, carga clima
  const handleCitySelection = async (cityName, country, lat, lon) => {
    setSuggestions([]);
    setCity("");

    setLoading(true);
    try {
      // Usamos lat/lon para evitar ambigüedad y búsquedas erróneas
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        Alert.alert("Error", data.message || "Ciudad no encontrada.");
      } else {
        const newCity = {
          id: data.id,
          name: data.name,
          country: country,
          temp: data.main.temp,
          condition: data.weather[0].description,
          icon: data.weather[0].icon,
        };

        const exists = weatherData.some((item) => item.id === newCity.id);
        if (exists) {
          Alert.alert("Duplicado", "Ya agregaste esta ciudad.");
        } else {
          setWeatherData([...weatherData, newCity]);
        }
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar al servidor.");
    } finally {
      setLoading(false);
    }
  };

  // Eliminar ciudad de la lista
  const deleteCity = (id) => {
    setWeatherData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima por Ciudad</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe una ciudad"
          value={city}
          onChangeText={onCityChange}
          autoCorrect={false}
        />
      </View>

      {loadingSuggestions && <ActivityIndicator size="small" color="#0000ff" />}

      {suggestions.length > 0 && (
        <ScrollView style={styles.suggestions}>
          {suggestions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.suggestionItem}
              onPress={() =>
                handleCitySelection(item.name, item.country, item.lat, item.lon)
              }
            >
              <Text>
                {item.name}, {item.country}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      <ScrollView style={{ marginTop: 10 }}>
        {weatherData.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardInfo}>
              <View>
                <Text style={styles.cityName}>
                  {item.name}, {item.country}
                </Text>
                <Text>
                  {item.temp}°C - {item.condition}
                </Text>
              </View>
              <Image
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.icon}@2x.png`,
                }}
                style={styles.icon}
              />
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteCity(item.id)}
            >
              <Text style={{ color: "white" }}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: { marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  suggestions: {
    maxHeight: 150,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cityName: { fontSize: 18, fontWeight: "bold" },
  icon: { width: 50, height: 50 },
  deleteButton: {
    backgroundColor: "#E53935",
    marginTop: 10,
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
  },
});
