const defaultState = {
    items: []
}

const GET_EXAMPLES = "GET_EXAMPLES";

export const examplesReducer = (state=defaultState, action) => {

    switch(action.type) {
        case GET_EXAMPLES:
            return {...state, items:[...state.items, ...action.payload]}
        default:
            return state;
    }
}

export const getExamplesAction = (payload) => ({type: GET_EXAMPLES, payload})

