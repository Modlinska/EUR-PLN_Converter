import * as constants from '../constants';


const initState = {
    transactions: [],
    exchangeRate: 0,
    transactionName: "",
    transactionAmount: '',
    transactionId: 0,
    largestValue: 0,
    transactionsValue: [],
    sumInEur: 0,
    sumInPln: 0,
    largestTransaction: [],
    error:""

};

const transactionsReducer = (state = initState, action) => {
    switch (action.type) {
        case constants.ADD_RATE:
            const value = action.payload.value;
            return {...state, exchangeRate: value};
        case constants.GET_TRANSACTION:
            return {...state, transactionName: action.payload.name, transactionAmount: action.payload.amount};
        case constants.ADD_TRANSACTION:
            const stateCopy = {...state};

            stateCopy.transactions.push({
                id: parseInt(state.transactionId) + 1,
                name: action.payload.name,
                amount: action.payload.amount,
                value: parseFloat(action.payload.amount) * parseFloat(state.exchangeRate),
                error:""
            })
            const transactionsValue = stateCopy.transactions.map(item => item.value);
            const max = Math.max(...transactionsValue);
            const sumEUR = stateCopy.transactions.reduce((prev, curr) => {
                return prev + parseFloat(curr.amount)
            }, 0);
            const largestTransaction = state.transactions.filter(item => item.value === max);
            return {
                ...state,
                transactions: stateCopy.transactions,
                transactionId: parseInt(state.transactionId) + 1,
                largestValue: max,
                transactionsValue: transactionsValue,
                sumInEur: sumEUR,
                largestTransaction: largestTransaction,



            };
        case constants.DELETE_TRANSACTION:
            const id = parseInt(action.payload.id);
            const filteredTransactions = state.transactions.filter(item => item.id !== id);
            const transactionsValue2 = filteredTransactions.map(item => item.value);
            const max2 = Math.max(...transactionsValue2);
            const sumEUR2 = filteredTransactions.reduce((prev, curr) => {
                return prev + parseFloat(curr.amount)
            }, 0);
            const largestTransaction2 = filteredTransactions.filter(item => item.value === max2);
            return {
                ...state,
                transactions: filteredTransactions,
                transactionsValue: transactionsValue2,
                largestValue: max2,
                sumInEur: sumEUR2,
                largestTransaction: largestTransaction2
            };
        default:
            return state;
    }
    ;
};


export default transactionsReducer;