import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, TextInput, FlatList, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Foundation from '@expo/vector-icons/Foundation';
import { useState } from "react";

export default function NavigateScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  
  const eventLocations = [
    "Main Atrium",
    "Presentation Room",
    "Cafeteria",
    "Information Booth",
    "Team 1 Booth",
    "Team 2 Booth",
    "Team 3 Booth",
    "Team 4 Booth",
    "Team 5 Booth",
  ];

  const handleLocationPress = (location: string) => {
    // Placeholder for wireless communication
    Alert.alert("Selected Location", location);
    console.log("Selected location:", location);
  };

  const filteredLocations = eventLocations.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        {/* Search Bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a location..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </SafeAreaView>

      {/* List of Events */}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredLocations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.eventItem} onPress={() => handleLocationPress(item)}>
              <Text style={styles.eventText}>{item}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No locations found.</Text>}
        />
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
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    marginLeft: 5,
  },
  searchInput: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  eventItem: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  eventText: {
    fontSize: 18,
    color: "#333",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#555",
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
