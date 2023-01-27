export const ADD_HISTORY_ITEM = "ADD_HISTORY_ITEM";
export const SOLVE_EXPRESSIONS = "SOLVE_EXPRESSIONS";

export const getAddHistoryItemAction = (payload) => ({type: ADD_HISTORY_ITEM, payload})
export const getSolveExpressionsAction = (expressions) => ({type: SOLVE_EXPRESSIONS, expressions})