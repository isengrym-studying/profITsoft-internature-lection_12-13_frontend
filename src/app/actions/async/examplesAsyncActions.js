import {getExamplesAction} from "../../reducers/examplesReducer";
import {getSolveExpressionsAction} from "../historyActions";

export const fetchExamples = (quantity) => {
    return dispatch => {
        let url = "http://localhost:8081/math/examples?" + new URLSearchParams({
            count: quantity
        });
        let options = {
            method: "GET",
            withCredentials: true,
            crossorigin: true,
            mode: 'cors',
        }

        fetch(url, options)
            .then(response => response.json())
            .then(json => {
                dispatch(getExamplesAction(json))
                console.log(json);
                dispatch(getSolveExpressionsAction(json))
            })
    }
}