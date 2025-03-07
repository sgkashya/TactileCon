import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#FFFFFF", "#FC9F35"]}
      locations={[0.4, 1]}
      style={styles.container}
    >
      {/* Image */}
      <Image
        source={require("../assets/images/conference.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      
      <View style={styles.content}>
        {/* Welcome Text */}
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.title}>the SPARK</Text>
        <Text style={styles.title}>Challenge!</Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={() => router.push("/TranslateScreen")}>
          <Text style={styles.buttonText}>Translate to Braille</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/ScheduleScreen")}>
          <Text style={styles.buttonText}>Schedule of Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/NavigateScreen")}>
          <Text style={styles.buttonText}>Navigate to an Event</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 335,
    height: 223,
    marginBottom: 20,
    position: "absolute",
    top: 100,  // Y-position
    left: 29, // X-position
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingBottom: 75,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF8800",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
