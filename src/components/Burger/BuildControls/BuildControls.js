import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Avocado', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'American Cheese', type: 'cheese' },
    { label: 'Steak', type: 'meat' },
];

const buildControls = ( props ) => (
    <div className={classes.BuildControls}>
        <p>Total: <strong>${props.price.toFixed( 2 )}</strong></p>
        {controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded( ctrl.type )}
                removed={() => props.ingredientRemoved( ctrl.type )}
                disabled={props.disabled[ctrl.type]}
                disabled1={props.disabled1[ctrl.type]} />
        ) )}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);

export default buildControls;
