import React from 'react';
/*
*  Responsible for Add Transaction
*  and pass it to the parent for further process
* */
export default class AddTransactionForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            description: '',
            amount: -10000,
            date: ''
        };
        this.resetInputs = this.resetInputs.bind(this);
    }

    onAmountChange (event) {
        this.setState({
            amount: Number(event.target.value)
        },
        );
    }

    onDescriptionChange (event) {
        this.setState(
            {
                description: event.target.value
            },
        );
    }

    onDateChange (event) {
        this.setState(
            {
                date: event.target.value
            },
        );
    }

    onSubmit () {
        this.props.callWhenClicked(this.state);
        this.resetInputs();
    }

    resetInputs () {
        this.setState({
            description: '',
            amount: -10000,
            date: ''
        });
    }

    render () {
        return (
            <div className="collapse" id="collapseAdd">
                <div className="card card-body">

                    <div className="form-row">
                        <div className="col-3">
                            <label htmlFor="filter-add-amount" className=" col-form-label">Transaction
                Amount</label>
                        </div>
                        <div className="col-9">
                            <div className="input-group">
                                <div className="input-group-prepend col2">
                                    <div className="input-group-text">Rp.</div>
                                </div>
                                <input type="number"
                                    className="form-input form-control"
                                    name="filter-add-amount"
                                    id="js-form-add__amount"
                                    value={this.state.amount}
                                    onChange={this.onAmountChange.bind(this)}
                                    placeholder="Insert amount.."/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-row mt-2" id="js-form-filter">
                            <div className="col-3">
                                <label htmlFor="filter-search-description" className=" col-form-label">Transaction
                  Description
                                </label>
                            </div>
                            <div className="col-9">
                                <input type="text" name="filter-search-description" className="form-control"
                                    id="js-form-add__description"
                                    onChange={this.onDescriptionChange.bind(this)}
                                    placeholder="Insert description.."
                                    value={this.state.description}/>
                            </div>
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="form-row mt-2" id="js-form-filter">
                            <div className="col-3">
                                <label htmlFor="filter-search-description" className=" col-form-label">Transaction's
                  Date</label>
                            </div>
                            <div className="col-9">
                                <input type="date"
                                    name="filter-search-date" className="form-control"
                                    id="js-form-add__date"
                                    onChange={this.onDateChange.bind(this)}
                                    value={this.state.date}
                                    placeholder="Insert description.."/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button id="js-form-add__submit"
                            onClick={this.onSubmit.bind(this)}
                            className="btn btn-primary pull-right">Add Data
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
