import { useState } from 'react';
import react from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';



function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };

      function addGoalHandler() {
          props.onAddGoal(enteredGoalText);
          setEnteredGoalText('');
      }



    return (
       <Modal visible={props.visible} animationType='slide'> 
        <View style={styles.InputContainer}>
            <Image style={styles.Image} source={require('../assets/images/goal.png')}/>
            <TextInput 
                     style={styles.TextInput} 
                     placeholder='Your course goal!' 
                     onChangeText={goalInputHandler}
                     value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                <Button title='Add goal' onPress={addGoalHandler} color='#5e0acc'/>
                    </View>
                    <View>
                <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
                    </View>
            </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    InputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#311b6b'
      },
      Image:{
          width: 100,
          height: 100,
          margin: 20
      },
      TextInput: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer: {
          flexDirection: 'row',
          marginTop: 16
      },
      button: {
          width: 100,
          marginHorizontal: 8
      },
})


export default GoalInput;