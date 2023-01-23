import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {

  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.listcontainer}>
        <Text>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listcontainer: {
    margin: 8,
    color: "white",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
});
