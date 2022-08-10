import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [courseGoals, setCourseGoals] = useState([
    {
      id: 1,
      value: "Learn React Native",
    },
    {
      id: 2,
      value: "Learn React",
    },
    {
      id: 3,
      value: "Learn React Hooks",
    },
  ]);

  const goalInputHandler = (enteredText) => {
    setUserInput(enteredText);
  };

  const addGoalHandler = () => {
    if (userInput.length > 0) {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random(), value: userInput },
      ]);
      Alert.alert("Goal Added", "Your goal is added", [
        { text: "Okay", onPress: () => console.log("Okay Pressed") },
      ]);
    } else {
      Alert.alert("Please enter a valid goal");
    }
  };

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
          <TextInput
            style={styles.textInput}
            onChangeText={goalInputHandler}
            placeholder="Your course goal!"
          />
          <Button color="#F65A83" title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.listGoalContainer}>
          <View style={{ alignSelf: "stretch", marginVertical: 12 }}>
            <Text>List of Goals...</Text>
          </View>
          <View style={{ width: "100%" }}>
            <ScrollView alwaysBounceVertical={false}>
              {courseGoals.map((item, index) => (
                <View key={item.id} style={styles.listItem}>
                  <Text style={styles.listText}>
                    {index + 1}. {item.value}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
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
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 10,
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
    width: "100%",
    padding: 8,
    marginVertical: 8,
    color: "#F65A83",
    backgroundColor: "#F65A83",
    borderRadius: 12,
    shadowOffset: { width: 1, height: 2 },
  },
  goalContainer: {
    flex: 1,
    width: "100%",
    padding: 8,
    marginVertical: 8,
    backgroundColor: "#FFF8BC",
    borderRadius: 12,
    shadowOffset: { width: 1, height: 2 },
  },
  inputContainer: {
    flex: 1,
    // height: 30,
    minHeight: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // alignContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#FF87B2",
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
    flex: 9,
    flexDirection: "column",
    alignItems: "center",
  },
  listItem: {
    width: "100%",
    marginVertical: 8,
    backgroundColor: "#F65A83",
    borderRadius: 12,
    padding: 10,
  },
  listText: {
    color: "white",
  },
});
