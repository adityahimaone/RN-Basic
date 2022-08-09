import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <View style={styles.descContainer}>
        <Text style={styles.description}>
          This is a simple React Native app that shows how to use the Expo
        </Text>
        <Text style={styles.descTips}>Learning by doing!</Text>
      </View>
      <Button
        title="Press me"
        color="#FF87B2"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 12,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#FF87B2",
  },
  description: {
    color: "white",
    fontSize: 16,
  },
  descTips: {
    fontSize: 12,
    color: "black",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#FFF8BC",
    padding: 5,
    marginVertical: 8,
    textAlign: "center",
  },
  descContainer: {
    padding: 8,
    marginHorizontal: 12,
    marginVertical: 8,
    color: "#F65A83",
    backgroundColor: "#F65A83",
    borderRadius: 12,
    shadowOffset: { width: 1, height: 2 },
  },
});
