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

/**
        variableName = createSlice({
            name : "sliceName",
            initialState :{
                xyz : ahhajdh,
                pqr :10
            },
            reducers : {
                action1 : (state,action) => {},
                action2 : (state,action) => {},
            }
        
        })

        const actionName = variableName.actions;

        const {xyz,pqr} = useSelector((store) => store.nameOfSlice); // to access the perticular slice from whole store

        dispatch(actionName.action1());
 */