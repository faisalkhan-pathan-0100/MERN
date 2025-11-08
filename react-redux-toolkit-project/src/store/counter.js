import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({
    name:'counter',
    initialState : {
        counterValue : 0,
    },
    reducers: {                         // counter releted all reducer creating
        increment: (state)=>{           // callback take 2 paramter one is state and 2nd is action but here not required so  that not written
           state.counterValue++;
        },
        decrement: (state)=>{
            state.counterValue--;
        },
        incdec: (state,action)=>{
            state.counterValue = state.counterValue + Number(action.payload.counter)
        },
    }
});
export default counterSlice;
export const counterActions = counterSlice.actions;