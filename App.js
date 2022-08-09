import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <View style={styles.descContainer}>
        <Text style={styles.description}>
          This is a simple React Native app that shows how to use the Expo
        </Text>
        <Text style={styles.descTips}>Learning by doing!</Text>
      </View>
      <View style={styles.goalContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Your course goal!" />
          <Button color="#F65A83" title="Add Goal" />
        </View>
        <View style={styles.listGoalContainer}>
          <View style={{ alignSelf: "stretch" }}>
            <Text>List of Goals...</Text>
          </View>
          <Text>1. Have a lot of money</Text>
          <Text>2. Buy a new House</Text>
          <Text>2. Have a Car</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 100,
            flexDirection: "row",
            alignItems: "stretch", // align items in the row vertically
            justifyContent: "space-around", // justify content in the row horizontally
          }}
        >
          <View style={{ flex: 1, backgroundColor: "red" }}></View>
          <View style={{ flex: 2, backgroundColor: "blue" }}></View>
          <View style={{ flex: 1, backgroundColor: "green" }}></View>
        </View>
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
    borderRadius: 8,
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
  goalContainer: {
    width: "90%",
    padding: 8,
    marginHorizontal: 12,
    marginVertical: 8,
    backgroundColor: "#FFF8BC",
    borderRadius: 12,
    shadowOffset: { width: 1, height: 2 },
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#F65A83",
    color: "#F65A83",
    padding: 5,
    marginVertical: 8,
    width: "70%",
  },
  buttonInput: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#FFF8BC",
    color: "#F65A83",
    padding: 5,
    marginVertical: 8,
  },
  listGoalContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});
