import { StyleSheet, Text, View,TextInput,Button,FlatList } from 'react-native'
import React, { useState } from 'react'
import { addTodo,removeTodo,updateTodo } from '../redux/reducers/todo/todoSlice';
import { useDispatch,  useSelector  } from 'react-redux';




const AddTodo = () => {
    const [task,setTask] = useState("")

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    
    function AddTodos(){
  
      dispatch(addTodo(task))
    
    }
  return (
   
    <View style={styles.inputContainer}>
        <TextInput placeholder='Enter Text Here'
        onChangeText={(text)=>setTask(text)}
        />
        <Button title='add to list'
          onPress={()=>AddTodos()}
          />

    </View>

  )
}

export default AddTodo

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor:'#222222',
        width:'50%',
    },
    todotext:{
        textAlign:'center',
        alignContent:'center',
        fontSize:50,
        color:'#ffffffff'
    }
})