import React, { useState} from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "../Components/Styles";
import axios from "axios";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";


const images = [image1, image2, image3];

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoding] = useState(false);
  const [randomImage, setRandomImage] = useState(images[2]);

  const getWeather = async () => {
    if (!city.trim()) return;
    setLoding(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89972f96705e6b675ad60c405f401393`
      );

      setWeather(res.data);
      const n = Math.floor(Math.random() * images.length);
      setRandomImage(images[n]);
      setLoding(false);
    } catch (error) {
      alert("Please Enter the name of the City");
      setLoding(false);
    }
  };

  return (
    <ImageBackground
      source={randomImage}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.TextinputContainer}>
          <TextInput
            style={styles.TextInput}
            value={city}
            placeholder="write your city"
            onChangeText={(text) => setCity(text)}
          />
          {loading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <Entypo onPress={getWeather} name="check" size={24} color="black" />
          )}
        </View>
        {Object.keys(weather).length > 0 ? (
          <>
            <View style={styles.LocationContainer}>
              <Text style={styles.Location}>
                {weather?.name}, {weather?.sys?.country}
              </Text>
            </View>
            <View style={styles.WeatherContainer}>
              <Text style={styles.temp}>
                {" "}
                {Math.round(weather.main.temp)} ْC
              </Text>
              <Text style={styles.weather}>{weather.weather[0].main}</Text>
            </View>
          </>
        ) : null}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
