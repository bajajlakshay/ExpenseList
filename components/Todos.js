import { StyleSheet, Text, View,Button, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../redux/reducers/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    console.log(todos);
    
  return (
    <SafeAreaView className="flex-1 flex-col justify-center items-center" >
      <ScrollView>
        <Text style={styles.todotext}>
            {todos.map((item)=>(
              <View  key={item.id}>
                <View className="m-4 flex-wrap p-10 border-b-4 border-r-2 border-blue-400 items-center rounded-lg" >
                    <Text>
                        {item.text}
                    </Text>
                    <Button title='remove todo'
                      onPress={()=>dispatch(removeTodo(item.id))}
                    />
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
    marginVertical:10,
    alignItems:'center'
  },
  listing:{
    flexDirection:'row',
    flexWrap:'wrap',
  }
})