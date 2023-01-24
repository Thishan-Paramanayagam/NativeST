import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputhandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

    return(
        <Modal>
    <View style={styles.inputcontainer}> 
    <TextInput
      style={styles.textInput} 
      placeholder="Add My goal"
      onChangeText={goalInputhandler}
      value={enteredGoalText}
    />
    <Button title="Add Goal" onPress={addGoalHandler} />
  </View>
  </Modal>
  );
};


export default GoalInput;

const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomColor: "blue",
        borderBottomWidth: 2,
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
      },

});