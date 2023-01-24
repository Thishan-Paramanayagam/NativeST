import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {

  return (
    <View style={styles.listcontainer}>
    <Pressable android_ripple={{color:'#212644'}} onPress={props.onDeleteItem.bind(this, props.id)}>
    
        <Text style={styles.goaltext}>{props.text}</Text>
        </Pressable>
      </View>
    
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
    
  },
  goaltext:{
    color: "white",
    padding: 8,
  }

});
