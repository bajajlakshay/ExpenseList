import { StyleSheet, Text, View,Button, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo,updateDate } from '../redux/reducers/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    console.log(todos);
    let d = Date.now()

  return (



    <SafeAreaView className="flex-1 flex-col justify-center items-center" >
      <ScrollView>
        <Text style={styles.todotext}>
            {todos.todos.map((item)=>(
              <View  key={item.id}>
                <View className=" p-3 border-b-4  border-red-300 items-center rounded-lg" >
                    <Text className="text-3xl text-yellow-200">
                        Rs. {item.text}
                    </Text>
                    <Text className="text-xl text-yellow-200">Added at: {todos.Dates}</Text>
                    <Pressable 
                    className="bg-orange-600 p-2 rounded-md m-3 px-5"
                      onPress={()=>(
                        dispatch(removeTodo(item.id)))}
                    ><Text className="text-gray-300 text-center text-xl">
                      remove todo
                      </Text></Pressable>
                </View>
                </View>
            ))}
            
        </Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Todos

const styles = StyleSheet.create({
  todolist:{
    flexDirection:'column',
    marginVertical:5,
    alignItems:'center'
  },
  listing:{
    flexDirection:'row',
    flexWrap:'wrap',
  }
})