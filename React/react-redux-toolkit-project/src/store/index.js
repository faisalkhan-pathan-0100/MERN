import {createStore} from 'redux'
import {configureStore, createSlice} from'@reduxjs/toolkit'
import counterSlice from './counter'
import hideSlice  from './hide'
/*
----------------------------without toolkit---------------------------------
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

const counterStore = createStore(counterReducer);
*/


const counterStore = configureStore( {
    reducer:{
        counter : counterSlice.reducer, // counter releted all reducer mapping  sliceName.reducer
        hide : hideSlice.reducer
    }
});

export default counterStore;