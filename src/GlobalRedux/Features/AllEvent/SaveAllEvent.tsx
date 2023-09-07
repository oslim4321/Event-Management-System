import { createSlice } from "@reduxjs/toolkit";


export const AllEvent = createSlice({
    name: "AllEvent",
    initialState: {data:[]},
    reducers: {
        getAllEvent: (state, action) => {
          state.data = action.payload
        }
    }
})

export const {getAllEvent} = AllEvent.actions
export default AllEvent.reducer