import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput({ goalInputHandler, onAddGoal }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your course goal!"
      />
      <Button color="#F65A83" title="Add Goal" onPress={onAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    borderBottomColor: "#FF87B2",
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // height: 30,
    minHeight: 40,
    width: "100%",
    // alignContent: "center",
  },
  textInput: {
    borderColor: "#F65A83",
    borderRadius: 8,
    borderWidth: 2,
    color: "#F65A83",
    marginVertical: 8,
    padding: 5,
    width: "70%",
  },
});

export default GoalInput;
