import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Advance_Hands_On_Exercise from './src/Tasks/Month1_Week4_Advance_Hands_On_Exercise/Advance_Exercise';
import Counter_App from './src/Tasks/Month2_Week1_Task1/Counter_App';
import To_do_App from './src/Tasks/Month2_Week1_Task2/To_do_App'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        
        <To_do_App/>
        {/* <Counter_App/> */}
        {/* <Advance_Hands_On_Exercise /> */}
      </ScrollView>
    </View>
  );
}