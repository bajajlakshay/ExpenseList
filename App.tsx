import React, { useState } from 'react';

import {

  StyleSheet,
  Vibration,
  View,

} from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { addTodo,removeTodo,updateTodo } from './redux/reducers/todo/todoSlice';
import { store } from './redux/store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App(): React.JSX.Element {
 
  
  return (
    <Provider store={store}>
      <View style={styles.Container}>
        <AddTodo />
        <Todos />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  inputContainer:{
      backgroundColor:'#222222',
      width:'50%',
  },
  Container:{
    flex:1,

    marginTop:10,
    alignItems:'center',
    
  },
});

export default App;
