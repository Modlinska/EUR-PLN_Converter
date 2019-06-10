import {createStore} from 'redux';
import transactionsReducer from '../reducers/transactionsReducer'
const store = createStore(transactionsReducer);

export default store