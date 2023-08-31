import { createSlice } from "@reduxjs/toolkit";



export const singleEvent  = createSlice({
    name: 'singleEvent',
    initialState: {data:{}},
    reducers:{
        saveSingleEvent:(state, action)=>{
            state.data = action.payload
        }
    }
})
export const {saveSingleEvent} = singleEvent.actions
export default singleEvent.reducer