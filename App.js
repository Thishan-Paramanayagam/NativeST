import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCoursegoals) => [
      ...currentCoursegoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCoursegoals) => {
      return currentCoursegoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appcontainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalscontainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}

              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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

  goalscontainer: {
    flex: 5,
  },
});
