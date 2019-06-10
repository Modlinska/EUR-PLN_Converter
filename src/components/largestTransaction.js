import React, {Component} from "react";


class LargestTransaction extends Component {


    render() {


        return (<>
            <h2>Largest transaction: </h2>
            {this.props.largestTransactions.map(item => <p>Largest transaction:
                Name: {item.name} Value in EUR: {(parseFloat(item.amount)).toFixed(2)}
                Value in PLN:{(parseFloat(item.amount) * parseFloat(this.props.value)).toFixed(2)}</p>
            )}
        </>)


    }
}

export default LargestTransaction;