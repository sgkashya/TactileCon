import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Foundation from '@expo/vector-icons/Foundation';

export default function NavigateScreen() {
  const router = useRouter();

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

      {/* Placeholder Content */}
      <View style={styles.content}>
        <Text style={styles.text}>Navigation Coming Soon!</Text>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.push("/TranslateScreen")} style={styles.navItem}>
          <Foundation name="braille" size={24} color="white" />
          <Text style={styles.navText}>Translate</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/ScheduleScreen")} style={styles.navItem}>
          <Ionicons name="calendar" size={24} color="white" />
          <Text style={styles.navText}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="navigate" size={24} color="black" />
          <Text style={styles.navTextActive}>Navigate</Text>
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
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
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
