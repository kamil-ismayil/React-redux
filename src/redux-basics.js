const redux = require('redux');
const createStore = redux.createStore; 

const initialState = {
    counter: 0
}

//when state is undefined, default value is state=initialState
const rootReducer = (state=initialState, action) => {

    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1        
        } 
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value        
        } 
    }


    return state; 
}
const store = createStore(rootReducer); 

console.log(store.getState());
//subscription is always getting called when the state is updated
store.subscribe(() => {
    console.log('[Subscription]: ',store.getState());
});

//we can add as many paramaeter we want and name them what we want
//But type must param must always be present
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());



