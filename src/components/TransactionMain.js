import React from 'react';
import Table from './Transaction';
import TableActions from './TransactionActions';
import Widget from './TransactionWidget';

/*
*   Holds the main point of the page
*   along with the transaction & query states
*/

export default class TransactionMain extends React.Component {
    constructor (props) {
        super(props);

        let dataToInject;
        if (this.props.injectData) {
            dataToInject = this.props.injectData;
        } else {
            dataToInject = [];
        }
        this.state = {
            transactions: dataToInject,
            filterQuery: {},
            sortDateAscending: false,
            sortAmountAscending: false
        };
    }

    getFinancialStatement () {
        let credit = 0;
        let debit = 0;
        let currentBalance = 0;
        this.state.transactions.forEach((transaction) => {
            const amount = Number(transaction.amount);
            if (amount < 0) {
                credit += amount;
            }
            if (amount > 0) {
                debit += amount;
            }

            currentBalance += amount;
        });

        //  Format it in proper way
        credit = credit.toLocaleString();
        debit = debit.toLocaleString();
        currentBalance = currentBalance.toLocaleString();

        return ({ credit: credit, debit: debit, currentBalance: currentBalance });
    }

    sortByAmount () {
        const reverse = this.state.sortAmountAscending;
        const transactionAmountSorted = this.state.transactions.sort((champion, competitor) => {
            let isBigger = champion.amount - competitor.amount;

            if (reverse) {
                isBigger = -isBigger;
            }
            return isBigger;
        });

        this.setState({
            transaction: transactionAmountSorted,
            sortAmountAscending: !reverse
        });
    }

    sortByDate () {
        const reverse = this.state.sortDateAscending;
        const transactionAmountSorted = this.state.transactions.sort((champion, competitor) => {
            let isBigger = Date.parse(champion.date) - Date.parse(competitor.date);

            if (reverse) {
                isBigger = -isBigger;
            }
            return isBigger;
        });

        this.setState({
            transaction: transactionAmountSorted,
            sortDateAscending: !reverse
        });
    }

    addTransaction (newTransaction) {
        this.setState({
            transactions: [...this.state.transactions, newTransaction]
        });
    }

    filterTransaction (newFilterQuery) {
        this.setState({
            filterQuery: newFilterQuery
        });
    }

    render () {
        const statements = this.getFinancialStatement.bind(this)();
        return (
            <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 border-left">
                <h1 className="h2">Financial Statement Report</h1>
                <hr/>
                <Widget statements={statements}/>
                <section className="col-md-12 pt-4">
                    <h2>Transactions List</h2>
                    <TableActions callWhenAdd={this.addTransaction.bind(this)}
                        callWhenFilter={this.filterTransaction.bind(this)}/>
                    <Table datas={this.state.transactions}
                        sortByAmount={this.sortByAmount.bind(this)}
                        sortByDate={this.sortByDate.bind(this)}
                        filters={this.state.filterQuery}/>
                </section>
            </main>
        );
    }
}
