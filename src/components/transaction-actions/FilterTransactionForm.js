import React from 'react';
/*
*  Responsible for Filter Transaction Query
*  and pass it to the parent for further process
* */
export default class FilterTransactionForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            description: '',
            amountGreaterThan: '',
            amountLowerThan: ''
        };
        this.resetInputs = this.resetInputs.bind(this);
    }

    onDescriptionChange (event) {
        this.setState({
            description: event.target.value
        });
    }

    onLowerThanChange (event) {
        this.setState({
            amountLowerThan: event.target.value
        });
    }

    onGreaterThanChange (event) {
        this.setState({
            amountGreaterThan: event.target.value
        });
    }

    onClick () {
        this.props.callWhenClicked(this.state);
        this.resetInputs();
    }

    resetInputs () {
        this.setState({
            description: '',
            amountGreaterThan: '',
            amountLowerThan: ''
        });
    }

    render () {
        return (
            <div className="collapse" id="collapseFilter">
                <div className="card card-body">
                    <div className="form-group" id="js-form-filter">

                        <div className="form-row mb-2">
                            <div className="col-3">
                                <label htmlFor="filter-search-description" className=" col-form-label">
                  Filter Description
                                </label>
                            </div>
                            <div className="col-9">
                                <input type="text"
                                    name="filter-search-description" className="form-control"
                                    id="js-form-filter__description"
                                    value={this.state.description}
                                    onChange={this.onDescriptionChange.bind(this)}
                                    placeholder="Search string description"/>
                            </div>
                        </div>


                        <div className="form-row">
                            <div className="col-3">
                                <label className="col-form-label">Filter Amount</label>
                            </div>
                            <div className="col-9">

                                <div className="form-row">
                                    <div className="col-6">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text" />
                                            </div>
                                            <input type="number" className="form-control"
                                                name="filter-amount-lower-than"
                                                value={this.state.amountLowerThan}
                                                onChange={this.onLowerThanChange.bind(this)}
                                                id="js-form-filter__lower-than"
                                                placeholder="Lower than"/>
                                        </div>
                                    </div>
                                    <div className="col-6">

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"> ></div>
                                            </div>
                                            <input type="number" className="form-control"
                                                name="filter-amount-greater-than"
                                                value={this.state.amountGreaterThan}
                                                onChange={this.onGreaterThanChange.bind(this)}
                                                id="js-form-filter__greater-than"
                                                placeholder="Greater than.."/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="form-group">
                            <button id="js-form-filter__submit"
                                onClick={this.onClick.bind(this)}
                                className="mt-2 btn btn-primary pull-right">Filter Data
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
