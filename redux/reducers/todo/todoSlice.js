import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "Hello World"}]
}

export const todoSlice = createSlice({
        name:'todo',
        initialState:initialState,
        reducers:{
            addTodo:(state,action)=>{
                const todo = {
                    id:nanoid(), 
                    text: action.payload
                }
                state.todos.push(todo)
            },
            removeTodo:(state,action)=>{
                state.todos = state.todos.filter((todo)=>(
                    todo.id !== action.payload)
                )  
            },
            updateTodo:(state,action)=>{
                let {todos} = state;
                state.todos = todos.map((item)=>
                    item.id === action.payload.id ? action.payload : item)
            }
        },
        
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;