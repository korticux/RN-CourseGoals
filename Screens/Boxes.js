import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

export default function App() {
    return (
        <View 
        style={{ 
          padding: 50, 
          flexDirection: 'row', 
          width: '80%', 
          height: 300,
          justifyContent:'space-around',
          alignContent: 'center'
          }}>
            <View 
                style={{
                    flex: 1,
                    backgroundColor: 'red',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text>1</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'green',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text>2</Text>
            </View>
                <View
                    style={{
                        backgroundColor: 'blue',
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                   <Text>3</Text>
                </View>
        </View>
    )
}
