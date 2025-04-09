import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Foundation from '@expo/vector-icons/Foundation';

export default function TranslateScreen() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  // Text submission
  const handleSendText = () => {
    if (inputText.trim() !== "") {
      console.log("Sending text to Braille display:", inputText);
      setInputText(""); // Clear input field after sending
    }
  };

  return (
    <LinearGradient
      colors={["#FFFFFF", "#FC9F35"]}
      locations={[0.4, 1]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/")}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.backText}>Home</Text>
        </TouchableOpacity>
      </SafeAreaView>

      {/* Input Box and Submit Button */}
      <View style={styles.content}>
        <Text style={styles.label}>Enter text to translate into Braille:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          placeholderTextColor="#777"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendText}>
          <Text style={styles.buttonText}>Send to Braille Display</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Foundation name="braille" size={24} color="black" />
          <Text style={styles.navTextActive}>Translate</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/ScheduleScreen")} style={styles.navItem}>
          <Ionicons name="calendar" size={24} color="white" />
          <Text style={styles.navText}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/ScheduleScreen")} style={styles.navItem}>
          <Ionicons name="navigate" size={24} color="white" />
          <Text style={styles.navText}>Navigate</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  safeArea: {
    paddingTop: StatusBar.currentHeight || 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  backText: {
    fontSize: 18,
    marginLeft: 5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FF8800",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FF8800",
    paddingVertical: 15,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    color: "white",
    fontSize: 14,
    marginTop: 2,
  },
  navTextActive: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 2,
  },
});