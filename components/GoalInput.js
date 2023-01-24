import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
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
        <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputcontainer}> 
    <Image style={styles.image} source={require('../assets/images/gl.png')}/>
    <TextInput
      style={styles.textInput} 
      placeholder="Add My goal"
      onChangeText={goalInputhandler}
      value={enteredGoalText}
    />
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
    <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
    <View style={styles.button}>
    <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
    </View>
    </View>
    
  </View>
  </Modal>
  );
};


export default GoalInput;

const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#311b6b',
        padding:16
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor:'white',
        borderRadius:6,
        width: "80%",
        marginRight: 8,
        padding: 16,
      },
      image:{
      width:152,
      height:145,
      margin:20
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection:'row'
      },
      button:{
        width:120,
        marginHorizontal:8,
      }

});