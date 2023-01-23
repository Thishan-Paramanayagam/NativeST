import { StyleSheet,View,Text } from "react-native";
function GoalItem(props){

    return(
        <View style={styles.listcontainer}>
       <Text>{props.text}</Text>
       </View>
    )
};

export default GoalItem;


const styles = StyleSheet.create({
    listcontainer:{
        margin:8,
        color:'white',
        borderColor:'red',
        borderWidth:1,
        borderRadius:6,
        backgroundColor:'#5e0acc',
        padding:8
      }
});