import *as constants from '../constants';

export function addRate(value) {
    return {
        type: constants.ADD_RATE,
        payload: {
            value
        }
    };
}

export function getTransactionsValue(name, amount) {
    return {
        type: constants.GET_TRANSACTION,
        payload: {
            name,
            amount
        }
    };
}

export function addTransaction(name, amount,error, id) {
    return {
        type: constants.ADD_TRANSACTION,
        payload: {
            name,
            amount,

            id: 0
        }
    };
}

export function removeTransaction(id) {
    return {
        type: constants.DELETE_TRANSACTION,
        payload: {
            id
        }
    };
}
