import React from 'react';
import TransacionSingleWidget from './widgets/TransactionSingleWidget';

/*
*  Responsible for All TransactionWidget Management
* */
const TransactionWidget = (props) => (
    <div className="col-md-12 dashboard-info-3 mt-3 mb-3">
        <TransacionSingleWidget title="Debit" amount={props.statements.debit}/>
        <TransacionSingleWidget title="Credit" amount={props.statements.credit}/>
        <TransacionSingleWidget title="Current Balance" amount={props.statements.currentBalance}/>
    </div>
);

export default TransactionWidget;
