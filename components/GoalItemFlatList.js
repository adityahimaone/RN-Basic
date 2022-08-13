import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

function GoalItemFlatList({ courseGoals, onDeleteGoal }) {
  const RenderedItem = (itemData) => {
    return (
      <View style={styles.listItem}>
        <Pressable
          onPress={() => onDeleteGoal(itemData.item.id)}
          android_ripple={styles.ripleEffect}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.listText}>
            {itemData.index + 1} - {itemData.item.value}
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      // data from the state
      data={courseGoals}
      // render item for each item in the list
      renderItem={(itemData) => RenderedItem(itemData)}
      //  generate key for each item in the list
      keyExtractor={(item, index) => item.id}
      alwaysBounceVertical={false}
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginVertical: 8,
    backgroundColor: "#F65A83",
    borderRadius: 12,
  },
  listText: {
    padding: 10,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  ripleEffect: {
    // radius: 12,00
    borderless: true,
    foreground: false,
    color: "#AF7AB3",
  },
});

export default GoalItemFlatList;
