import { View } from "react-native";

function FlexItem() {
  return (
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
  );
}

export default FlexItem;
