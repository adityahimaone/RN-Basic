import { StyleSheet, View, Button, TextInput, Modal, Pressable, Text } from "react-native";

function GoalInput({ goalInputHandler, onAddGoal, modalVisible, onCloseModal }) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonGroupContainer}>
          <Pressable
            android_ripple={styles.ripleEffect}
            style={styles.buttonSubmit}
            onPress={onAddGoal}
          >
            <Text style={styles.buttonText}>Add Goal</Text>
          </Pressable>
          <Pressable
            android_ripple={styles.ripleEffect}
            style={styles.buttonCancel}
            onPress={onCloseModal}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f2f2",
    alignItems: "center",
    borderBottomColor: "#FF87B2",
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // height: 30,
    minHeight: 40,
    width: "100%",
    paddingHorizontal: 30,
    // alignContent: "center",
  },
  textInput: {
    borderColor: "#F65A83",
    borderRadius: 8,
    borderWidth: 2,
    color: "#F65A83",
    backgroundColor: "#F7ECDE",
    marginVertical: 8,
    padding: 5,
    width: "100%",
  },
  buttonGroupContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonSubmit: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#C1EFFF",
    marginEnd: 8,
  },
  buttonCancel: {
    marginStart: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#FFB3B3",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  ripleEffect: {
    borderless: false,
    foreground: false,
    color: "#AF7AB3",
  },
});

export default GoalInput;
