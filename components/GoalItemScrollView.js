import { StyleSheet, Text, View, ScrollView } from "react-native";

function GoalItemScrollView({ courseGoals }) {
  return (
    <ScrollView alwaysBounceVertical={false}>
      {courseGoals.map((item, index) => (
        <View key={item.id} style={styles.listItem}>
          <Text style={styles.listText}>
            {index + 1}. {item.value}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
export default GoalItemScrollView;
