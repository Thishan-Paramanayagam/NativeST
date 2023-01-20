import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer }>
      <TextInput style={styles.textInput} placeholder="Add My goal"/>
      <Button title="Add"/>
      </View>
      <View>
      <Text> List of Goals.. </Text>
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
appcontainer:{
  padding:50,

},
inputcontainer:{
flexDirection:'row',
justifyContent: "space-between" 
},
textInput:{
  borderWidth:1,
  borderColor:'#cccccc',
  width:'80%'
}
});
