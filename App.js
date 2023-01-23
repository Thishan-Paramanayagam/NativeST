import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";


export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputhandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addgoalhandler() {
    setCourseGoals((currentCoursegoals) => [
      ...currentCoursegoals,
      {text : enteredGoalText, id:Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}> 
        <TextInput
          style={styles.textInput} 
          placeholder="Add My goal"
          onChangeText={goalInputhandler}
        />
        <Button title="Add Goal" onPress={addgoalhandler} />
      </View>
      <View style={styles.goalscontainer}>
      <FlatList
       data = {courseGoals}
       renderItem= {(itemData) =>{
        return <GoalItem text={itemData.item.text} />;
      }
      }
      keyExtractor={(item, index) =>{
        return item.id;
      }} 
      alwaysBounceVertical={false}/>
        
      
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  // dtext: {
  //   margin: 16,
  //   borderWidth: 2,
  //    borderColor: "blue",
  //    padding: 16
  // }
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalscontainer: {
    flex: 5,
  },
 
});
