import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.InputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your curse goal!'/>
        <Button title='Add goal'/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});