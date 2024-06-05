import { StyleSheet, Text, View,TextInput,Button,FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { addTodo,updateDate } from '../redux/reducers/todo/todoSlice';
import { useDispatch,  useSelector  } from 'react-redux';




const AddTodo = () => {
    const [task,setTask] = useState("")

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    
    let d = new Date()

    function AddTodos(){
  
      dispatch(addTodo(task))
    
    }
  return (
   
    <View style={styles.inputContainer}>
        <TextInput 
        className="p-3 "
        placeholderTextColor={'#ffffff'}
        placeholder='Enter Text Here'
        onChangeText={(text)=>setTask(text)}
        keyboardType='decimal-pad'
        />
        <Pressable
        className="bg-orange-600 p-2 rounded-md m-3"
          onPress={()=>{
            dispatch(updateDate(d.toLocaleString()))
            AddTodos()}}
          >
             <Text
            className="text-gray-300 text-center text-xl"
             >Add Money</Text>
            </Pressable>

    </View>

  )
}

export default AddTodo

const styles = StyleSheet.create({
    inputContainer:{
      margin:10,
        backgroundColor:'#222222',
        width:'50%',
        borderRadius:10
    },
    todotext:{
        textAlign:'center',
        alignContent:'center',
        fontSize:50,
        color:'#ffffffff'
    }
})