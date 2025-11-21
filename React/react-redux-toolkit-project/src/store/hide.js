import { createSlice } from "@reduxjs/toolkit";


const hideSlice = createSlice({
    name : 'hide',
    initialState : false,
    reducers : {
        hide : (state) => {
            return state = !state;
        }
    }
})
export default hideSlice;
export const hideActions = hideSlice.actions;