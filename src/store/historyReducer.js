const defaultState = {
    items: []
};

export const historyReducer = (state=defaultState, action) => {
    switch(action.type) {
        case "ADD_HISTORY_ITEM":
            return {...state, items:[...state.items, action.payload]}
        case "SOLVE_EXAMPLES":
            break;
        default:
            return state;
    }
}