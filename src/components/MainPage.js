import React, {Component} from "react";
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import AddTransaction from "./addTransaction";
import TransactionList from "./transactionList";
import LargestTransaction from "./largestTransaction";

class MainPage extends Component {


    handleExchangeRate = (e) => {
        const value = e.target.value;
        this.props.addRate(value);
    };

    handleTransactionName = (e) => {
        const name = e.target.value;
        this.props.getTransactionsValue(name, this.props.transactionAmount);
    };
    handleTransactionAmount = (e) => {
        const amount = e.target.value;
        this.props.getTransactionsValue(this.props.transactionName, amount);
    };


    handleTransactionAdd = (e) => {
        e.preventDefault();

           this.props.addTransaction(
               this.props.transactionName,
               this.props.transactionAmount,
               this.props.transactionId,
               this.props.exchangeRate,
           );
    };
    handleTransactionRemove = (e) => {
        e.preventDefault();
        const id = e.target.parentElement.getAttribute('data-id');
        this.props.removeTransaction(id);
    };


    handleSubmit = (e) => {
        e.preventDefault();
    };



    render() {

        return (
            <>
                <h1>EUR/PLN Converter</h1>
                <form className="exchangeRate" onSubmit={this.handleSubmit}>
                    <label> Put your exchange rate: </label>
                    <input type='text'
                           id='rate' value={this.props.exchangeRate}
                           placeholder='Your exchange rate'
                           onChange={this.handleExchangeRate.bind(this)}
                    />
                </form>
                <p>Exchange rate: 1EUR = {this.props.exchangeRate}PLN</p>
                <AddTransaction
                    transactionName={this.props.transactionName}
                    transactionAmount={this.props.transactionAmount}
                    handleTransactionName={this.handleTransactionName.bind(this)}
                    handleTransactionAmount={this.handleTransactionAmount.bind(this)}
                    handleSubmit={this.handleSubmit}
                    handleTransactionAdd={this.handleTransactionAdd.bind(this)}
                />

                    <TransactionList

                    transactions={this.props.transactions}
                    value={this.props.exchangeRate}
                    id={this.props.transactionId}
                    handleTransactionRemove={this.handleTransactionRemove.bind(this)}
                    sumeur={this.props.sumInEur}
                    sumpln={this.props.sumInPln}

                    />
                    <LargestTransaction largestTransactions={this.props.largestTransaction}
                    value={this.props.exchangeRate}
                    />

            </>

        )
    }
}


const mapStateToProps = (state) => {
    return {...state};
};
const mapDispatchToProps = (dispatch) => {
    return {
        addRate: (value) => dispatch(actions.addRate(value)),
        getTransactionsValue: (name, amount) => dispatch(actions.getTransactionsValue(name, amount)),
        addTransaction: (name, amount) => dispatch(actions.addTransaction(name, amount)),
        removeTransaction: (id) => dispatch(actions.removeTransaction(id)),

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);