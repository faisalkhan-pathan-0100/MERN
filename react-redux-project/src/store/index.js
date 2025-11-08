import {createStore} from 'redux'

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
export default counterStore;