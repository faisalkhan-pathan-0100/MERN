# React + redux

# Basic concept behind the redux

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

# React-Redux

### React-Redux Key Hooks

useSelector() Used to read data from the Redux store inside a component.
useDispatch() Used to dispatch (send) actions to the store.
<Provider store={store}> Wraps the whole app so that every component can access the Redux store.
