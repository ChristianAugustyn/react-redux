const redux = require('redux');
const createStore = redux.createStore;

const initalState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initalState, action) => {
    if (action.type === 'INC_COUNTER') return {...state, counter: state.counter + 1}
    if (action.type === 'ADD_COUNTER') return {...state, counter: state.counter + action.value}
    return state;
};

//Store
const store = createStore(rootReducer);

//subscription
store.subscribe(() => {// gets triggered when a dispatch is called
    console.log('[Subscription]', store.getState());
});

//Dispatcher
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10}); //should not update counter, have to wait until we subscribe the state