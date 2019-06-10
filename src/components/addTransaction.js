import React, {Component} from "react";

class AddTransaction extends Component {
    render() {

        return (<>
            <form className="addTransaction"  onSubmit={this.props.handleSubmit}>
                <label>Name of transaction: </label>
                <input type='text'
                       name='transactionName'
                       value={this.props.transactionName}
                       placeholder='Name of your transaction'
                      onChange={this.props.handleTransactionName}
                />
                <br/>
                <label>Amount in EUR: </label>
                <input type='text'
                       name='transactionAmount'
                       value={this.props.transactionAmount}
                       placeholder='Value of your transaction'
                       onChange={this.props.handleTransactionAmount}
                />
                <br/>
                <button
                onClick={this.props.handleTransactionAdd}
                >ADD</button>
            </form>
        </>)


    }
}

export default AddTransaction;
