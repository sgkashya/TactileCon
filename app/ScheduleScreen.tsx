import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Foundation from '@expo/vector-icons/Foundation';

const events = [
  {
    id: "1",
    title: "Welcome Ceremony and Breakfast",
    time: "10:00 AM - 10:30 AM",
    location: "Main Atrium",
  },
  {
    id: "2",
    title: "Team Introductions",
    time: "10:30 AM - 11:00 AM",
    location: "Presentation Room",
  },
  {
    id: "3",
    title: "Project Demos",
    time: "11:15 AM - 1:45 PM",
    location: "Main Atrium",
  },
  {
    id: "4",
    title: "Networking Lunch",
    time: "1:45 PM - 2:15 PM",
    location: "Cafeteria",
  },
  {
    id: "5",
    title: "Judge Scoring and Prize Distribution",
    time: "2:30 PM - 3:00 PM",
    location: "Main Atrium",
  },
];

export default function ScheduleScreen() {
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
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Event Schedule</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventCard}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDetails}>{item.time}</Text>
              <Text style={styles.eventDetails}>{item.location}</Text>
            </View>
          )}
        />
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.push("/TranslateScreen")} style={styles.navItem}>
          <Foundation name="braille" size={24} color="white" />
          <Text style={styles.navText}>Translate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar" size={24} color="black" />
          <Text style={styles.navTextActive}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/NavigateScreen")} style={styles.navItem}>
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
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  eventCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    color: "#000",
  },
  eventDetails: {
    fontSize: 14,
    color: "#555",
  },
});
