import * as actionTypes from '../actions';

const initialState = {
    results: []
};

//updating the state immutably
const reducer = (state=initialState , action) => {
    switch (action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            //result=true, if ids below are not equal
            //filter always created a copy of array
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return{
                ...state,
                results: updatedArray
            }
    }

    return state; 
};

export default reducer; 