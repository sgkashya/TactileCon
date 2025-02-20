import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#FC9F35"]}
      locations={[0.4, 1]} // 40% for #FFFFFF, 100% for #FC9F35
      style={styles.container}
    >
      <View
        style={styles.container}
      >
        <Text>Welcome to the SPARK Challenge!</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FC9F35",
  },
});