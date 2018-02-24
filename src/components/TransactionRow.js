import React from 'react';
import moment from 'moment';
/*
*  Responsible for each rows
*  in the Transaction table
* */

const DATE_FORMAT = 'DD MMMM YYYY';
export default class TransactionRow extends React.Component {
    render () {
        const dateToRender = Date.parse(this.props.data.date);
        return (
            <tr className="js-table-transaction__credit"
                key={this.props.index}>
                <td className="text-center">
                    {this.props.index + 1}
                </td>
                <td className="js-table-transaction__data-description" >
                    {this.props.data.description}
                </td>
                <td className="js-table-transaction__data-date text-center">
                    { moment(dateToRender).format(DATE_FORMAT) }
                </td>
                <td className="js-table-transaction__data-amount text-right" >
                    <span className="pull-left">Rp. </span>
                    <span className="amount">
                        {this.props.data.amount.toLocaleString()}
                    </span>
                </td>
            </tr>
        );
    }
}
