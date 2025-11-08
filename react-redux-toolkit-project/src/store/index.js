import {createStore} from 'redux'
import {configureStore, createSlice} from'@reduxjs/toolkit'
/*
let COUNTER_STORE = {
    counter : 0,
    hide:true,
}

const counterReducer = (store =COUNTER_STORE,action) => {
    let newStore = store;
    console.log(action)
    switch(action.type){
        case "INCREMENT" :{
            newStore = {...store,counter:store.counter + 1}
            break;
        }
        case "DECREMENT" :{
            newStore = {...store,counter:store.counter - 1}
            break;
        }
         case "INC_DEC" :{
            newStore = {...store,counter:store.counter + Number(action.payload.counter)}
            break;
        }
        case "HIDE_SHOW" :{
            newStore = {...store,hide:!store.hide}
            break;
        }

    }
    return newStore;
}
*/
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

const hideSlice = createSlice({
    name : 'hide',
    initialState : false,
    reducers : {
        hide : (state) => {
            return state = !state;
        }
    }
})
const counterStore = configureStore( {
    reducer:{
        counter : counterSlice.reducer, // counter releted all reducer mapping
        hide : hideSlice.reducer
    }
});



export const counterActions = counterSlice.actions;
export const hideActions = hideSlice.actions;
export default counterStore;