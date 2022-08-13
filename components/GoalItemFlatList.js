import { StyleSheet, Text, View, FlatList } from "react-native";

function GoalItemFlatList({ courseGoals }) {
  const RenderedItem = (itemData) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>
          {itemData.index + 1} - {itemData.item.value}
        </Text>
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
    padding: 10,
  },
  listText: {
    color: "white",
  },
});

export default GoalItemFlatList;
