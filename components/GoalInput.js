import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput({ goalInputHandler, addGoalHandler }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your course goal!"
      />
      <Button color="#F65A83" title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default GoalInput;
