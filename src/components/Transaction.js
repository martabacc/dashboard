import React from 'react';
import TableRow from './TransactionRow';

/*
* Responsible for showing given data
* that suits given filter props from Parent Class (TransactionMain)
* */

export default class Transaction extends React.Component {
    constructor (props) {
        super(props);
        this.getFilteredArray = this.getFilteredArray.bind(this);
    }

    getFilteredArray () {
        const {
            filters, datas
        } = this.props;
        return datas.filter((data) => {
            let insensitiveCaseMatch = true;
            let isGreaterAmount = true;
            let isLowerAmount = true;
            if (filters.description) {
                const lowerCasedFilter = filters.description.toLowerCase();
                const lowerCasedDescription = data.description.toLowerCase();
                insensitiveCaseMatch = lowerCasedDescription.includes(lowerCasedFilter);
            }
            if (filters.amountLowerThan) {
                isGreaterAmount = data.amount <= filters.amountLowerThan;
            }
            if (filters.amountGreaterThan) {
                isLowerAmount = data.amount >= filters.amountGreaterThan;
            }

            return (insensitiveCaseMatch && isGreaterAmount && isLowerAmount);
        });
    }

    render () {
        const getDataToRender = this.getFilteredArray();
        return (
            <div className="table-responsive">
                <table className="table table-sm table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center align-middle">#</th>
                            <th className="text-center align-middle">Description</th>
                            <th className="text-center align-middle col-2">Date
                            <button className="btn btn-sm btn-dark ml-2" id="js-table-sort__date"
                                onClick={this.props.sortByDate}>
                                <i className="fa fa-sort" />
                            </button>
                            </th>
                            <th className="col-2 text-center align-middle col-2">Amount
                            <button className="btn btn-sm btn-dark ml-2" id="js-table-sort__amount"
                                onClick={this.props.sortByAmount}>
                                <i className="fa fa-sort" />
                            </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getDataToRender.map((data, index) =>
                                <TableRow data={data} key={index} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
