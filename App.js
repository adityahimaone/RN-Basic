import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Header from "./components/Header";
import GoalInput from "./components/GoalInput";
import GoalItemScrollView from "./components/GoalItemScrollView";
import GoalItemFlatList from "./components/GoalItemFlatList";
import FlexItem from "./components/FlexItem";

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

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.goalContainer}>
        {/* Input */}
        <GoalInput
          goalInputHandler={goalInputHandler}
          onAddGoal={addGoalHandler}
        />
        <View style={styles.listGoalContainer}>
          <View style={{ alignSelf: "stretch", marginVertical: 12 }}>
            <Text>List of Goals...</Text>
          </View>
          <View style={{ width: "100%", height: "90%" }}>
            {/* Scrolll View */}
            {/* <GoalItemScrollView courseGoals={courseGoals} /> */}

            {/* FlatList for Lazy Load data */}
            <GoalItemFlatList
              courseGoals={courseGoals}
              onDeleteGoal={deleteGoalHandler}
            />
          </View>
        </View>
      </View>
      {/* Flex Item */}
      <FlexItem />
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

  goalContainer: {
    flex: 1,
    width: "100%",
    padding: 8,
    marginVertical: 8,
    backgroundColor: "#FFF8BC",
    borderRadius: 12,
    shadowOffset: { width: 1, height: 2 },
  },
  listGoalContainer: {
    flex: 9,
    flexDirection: "column",
    alignItems: "center",
  },
});
