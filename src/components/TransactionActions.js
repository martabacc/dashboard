import React from 'react';
import AddTransactionForm from './transaction-actions/AddTransactionForm';
import FilterTransactionForm from './transaction-actions/FilterTransactionForm';
/*
*  Holds all manipulation activity management
*  to the transaction
* */

export default class TransactionActions extends React.Component {
    addTransaction (transactionData) {
        return this.props.callWhenAdd(transactionData);
    }

    filterTransaction (filterQuery) {
        return this.props.callWhenFilter(filterQuery);
    }

    render () {
        return (
            <div>
                <div className="custom-menu-filter">
                    <div>
                        <a className="btn btn-sm btn-primary" data-toggle="collapse" href="#collapseAdd"
                            role="button" aria-expanded="false" aria-controls="collapseAdd">
              Add Transaction
                        </a>
                    </div>
                    <div>
                        <a className="btn btn-sm btn-primary" data-toggle="collapse" href="#collapseFilter"
                            role="button" aria-expanded="false" aria-controls="collapseFilter">
              Filter Transaction
                        </a>
                    </div>

                </div>

                <div className="custom-menu-cards">
                    <AddTransactionForm callWhenClicked={this.addTransaction.bind(this)}/>
                    <FilterTransactionForm callWhenClicked={this.filterTransaction.bind(this)}/>
                </div>
            </div>
        );
    }
}
