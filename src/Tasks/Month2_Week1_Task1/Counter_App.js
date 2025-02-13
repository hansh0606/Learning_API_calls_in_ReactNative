import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import React, { useState } from 'react';



export default function Counter_App() {
    const [count,setCount] = useState(0)
    const inc =()=>{
        return (count+1);
    }
    
    const dec =()=>{
        if(count<=0)
        {
            alert("Can't be less or equal  0!")
            return 0;
        }
        return (count-1);
    }

    const counter=()=>
    {
        return 0
    }

   
  return (
    <>
    <Text>
        {count}
    </Text>
      <View style={styles.button}>
        <Button title="Increment" style={styles.button} onPress={()=>setCount(inc())}></Button>
      </View>
     
      <View style={styles.button}>
        <Button title="Decrement" onPress={()=>setCount(dec())}></Button>
      </View>

      <View style={styles.button}>
        <Button title="Reset Counter" onPress={()=>setCount(counter())}></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
  },
});
