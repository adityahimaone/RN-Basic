import { StyleSheet, View, Text } from "react-native";

function Header() {
  return (
    <>
      <Text style={styles.title}>My App</Text>
      <View style={styles.descContainer}>
        <Text style={styles.description}>
          This is a simple React Native app that shows how to use the Expo
        </Text>
        <Text style={styles.descTips}>Learning by doing!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
});

export default Header;
