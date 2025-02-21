import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Advance_Hands_On_Exercise from './src/Tasks/Month1_Week4_Advance_Hands_On_Exercise/Advance_Exercise';
import Counter_App from './src/Tasks/Month2_Week1_Task1/Counter_App';
import To_do_App from './src/Tasks/Month2_Week1_Task2/To_do_App'
import TodoList from './src/Tasks/Month2_Week1_Task2/To_do_with_Class_Components';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      
        
        {/* <To_do_App/> */}
        <TodoList/>
        {/* <Counter_App/> 
        <ScrollView >

        <Advance_Hands_On_Exercise />
        </ScrollView> */}
      
    </View>
  );
}