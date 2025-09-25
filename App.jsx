import { LogBox, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
LogBox.ignoreAllLogs();

function App() {
  return (
    <View style={styles.container}>
      <Text>teste alexxx appjs!</Text>
    </View>
  );
}

let AppEntryPoint = App;

if ( true) {
  AppEntryPoint = require("./.storybook").default;
}

  {/* <Label status='gfjvjghjbfh' text='MyLabel'/>
  <TextBox placeholderValue='ENTER YOUR AGE' status='warning' iconType='close' />
  <TextBox placeholderValue='say your name' status='normal' iconType='filter' />
  <LabelHint status='warning' text='MyHint'/> */}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
