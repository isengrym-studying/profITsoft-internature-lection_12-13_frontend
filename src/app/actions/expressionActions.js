let operatorBetweenDigitsRe = /-?\d+\D{1}\d+/
let fullEquationRe = /-?\d+\D{1}\d+=-?\d+/
let operatorRe = /\D/

export const ADD_SYMBOL = "ADD_SYMBOL";
export const SOLVE_EXPRESSIONS = "SOLVE_EXPRESSIONS";

export function processGivenSymbol(state, expression, symbol) {

    if (symbol === 'AC')
        return {...state, expression: "", isFullEquation: false}
    else if (equalSignPlacedWrong(symbol, expression)) {
        return {...state, expression: state.expression, isFullEquation: false}
    }
    else if (isFullEquation(expression)) {
        let result = startNewEquation(symbol, expression)
        return {...state, expression: result, isFullEquation: false}
    }
    else if (operatorsInRow(symbol, expression)) {
        let result = replaceOperator(symbol, expression);
        return {...state, expression: result, isFullEquation: false}
    }
    else if (initializeCalculation(symbol, expression)) {
        let result = calculateResult(expression);
        return {...state, expression: result, isFullEquation: true}
    }
    else
        return {...state, expression: expression + symbol, isFullEquation: false}
}
function equalSignPlacedWrong(symbol, stateParam) {
    if (symbol === '=' && stateParam.length === 0)
        return true;
    if (symbol === '=' && !operatorBetweenDigitsRe.test(stateParam))
        return true;

    return false;
}

function isFullEquation(stateParam) {
    return fullEquationRe.test(stateParam);
}

function startNewEquation(symbol, stateParam) {
    if (symbol === '=')
        return "";
    let resultOfPrev = stateParam.split("=")[1];
    return resultOfPrev + symbol;
}


function operatorsInRow(symbol, stateParam) {
    if (stateParam.length === 0)
        return false;

    let lastChar = stateParam[stateParam.length-1];
    return operatorRe.test(symbol) && operatorRe.test(lastChar);
}

function replaceOperator(symbol, stateParam) {
    let prelastIndex = stateParam.length-1;
    return stateParam.substring(0, prelastIndex) + symbol;
}

function initializeCalculation(symbol, stateParam) {
    if (symbol === '=' && operatorBetweenDigitsRe.test(stateParam)) {
        return true;
    }
    else if (operatorRe.test(symbol) && operatorBetweenDigitsRe.test(stateParam)) {
        return true;
    }
    return false;
}

export function calculateResult(stateParam) {
    const result = stateParam
        .split(/(\D)/)
        .map(value => (value.match(/\d/) ? parseInt(value, 0) : value))
        .reduce((acc, value, index, array) => {
            switch (value) {
                case "+":
                    return (acc = acc + array[index + 1]);
                case "-":
                    return (acc = acc - array[index + 1]);
                case "*":
                    return (acc = acc * array[index + 1]);
                case "/":
                    return (acc = Math.round(acc / array[index + 1]));
                default:
                    return acc;
            }
        });
    return stateParam + '=' + result;
}
