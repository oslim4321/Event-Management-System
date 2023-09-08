import { createSlice } from "@reduxjs/toolkit";

export const RegisterEventData = createSlice({
  name: "registerEventData",
  initialState: { data: {} },
  reducers: {
    saveRegisterEvents: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { saveRegisterEvents } = RegisterEventData.actions;
export default RegisterEventData.reducer;
