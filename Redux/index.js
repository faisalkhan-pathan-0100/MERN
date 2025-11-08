/*
    - Action → dispatched to the store
    - Store sends the action to the reducer
    - Reducer returns a new state
    - Store updates its internal state
    - All subscribers are notified that the state has changed

    - All 10 subscriber functions will be called automatically after every dispatch.

    - Each one gets invoked in the order they were registered using store.subscribe().
      Redux doesn’t decide which to call — it calls all because it doesn’t know which part of the state each subscriber cares about.

    - Redux updates the state and then calls every subscriber that was registered using store.subscribe() — even if that particular 
    subscriber doesn’t care about the part of the state that changed.

    - 
*/


const redux = require('redux');

const INITIAL_VALUE = {
    counter : 0,
    name : "faisalkhan",
}

// reducer which actually manage the state means save chnages in diff state of store
const reducer = (store=INITIAL_VALUE,action) => {
    let newStore = store
    if(action.type === "INCREMENT"){
        newStore = {...store,
        counter : store.counter + 2,
    }
    }else if(action.type === "DECREMENT"){
        newStore = {...store,
        counter : store.counter - 1,
    }
    }else if(action.type === "NAME_CHANGE"){
        newStore = {
            ...store,name :action.payload.name,
        }
    }
    return newStore;
}

//creating store where all state will manage
const store = redux.createStore(reducer);


// function which take action based on the change in the perticular state of the  store
const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);

// dispatcher fucntion who actully dispatch what action should be taken
store.dispatch({
    type:"DECREMENT"
})
store.dispatch({
    type:"NAME_CHANGE",
    payload:{
        name:"shahidkhan"
    }
})