import { StyleSheet, View, Text, Image } from "react-native";

function Header() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <Text style={styles.title}>Target APP</Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.description}>
          This is a simple React Native app that can use to add your Goal!
        </Text>
        <Text style={styles.descTips}>Learning by doing!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    margin: 12,
  },
  title: {
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
  image: {
    width: 50,
    height: 50,
    color: "#F65A83",
    backgroundColor: "#F65A83",
    borderRadius: 12,
  },
});

export default Header;
