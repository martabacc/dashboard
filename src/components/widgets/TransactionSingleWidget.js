import React from 'react';
import classnames from 'classnames';

/*
* Shows Credit Total in a nutshell
* */

export default class TransactionSingleWidget extends React.Component {
    constructor (props) {
        super(props);
        this.getStyle = this.getStyle.bind(this);
    }

    getStyle () {
        let style;
        switch (this.props.title) {
            case 'Debit':
                style = 'bg-primary';
                break;
            case 'Credit':
                style = 'bg-warning';
                break;
            default:
                style = 'bg-success';
                break;
        }

        return style;
    }

    render () {
        return (
            <div className="col-md-4">
                <div className={classnames('card text-white', this.getStyle())} id="js-dashboard__widget">
                    <div className="card-body">
                        <h5>
                            <span id="js-dashboard__widget--title">{this.props.title}</span>
                            <span className="pull-right js-dashboard__widgets--credit">
                Rp <span className="widget-amount">{this.props.amount}</span>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

