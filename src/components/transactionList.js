import React, {Component} from "react";

class TransactionList extends Component {


    render() {

        return (
            <>

                <h2>Transactions list</h2>
                <ul>
                    {this.props.transactions.map(item =>
                        <TransactionItem id={item.id} key={item.id}
                                         name={item.name} amount={item.amount} value={this.props.value}
                                         handleTransactionRemove={this.props.handleTransactionRemove.bind(this)}
                        />)}
                </ul>
                <h2>Sum of transaction in EUR: {(this.props.sumeur).toFixed(2)} in
                    PLN: {(parseFloat(this.props.sumeur) * parseFloat(this.props.value)).toFixed(2)}   </h2>

            </>
        )
    }
}

class TransactionItem extends Component {
    render() {

        const {amount, name, value} = this.props;
        return (<>
                <li data-id={this.props.id}> Name: {name} Value:{parseFloat(amount).toFixed(2)} Value in
                    PLN: {(parseFloat(amount) * parseFloat(value)).toFixed(2)}
                    <button onClick={this.props.handleTransactionRemove.bind(this)}>Delete</button>
                </li>

            </>
        )
    }
}

export default TransactionList;