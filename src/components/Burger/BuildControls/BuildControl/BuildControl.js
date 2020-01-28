import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>Light</button>
        <button
            className={classes.More}
            onClick={props.added}
            disabled={props.disabled1}>Extra</button>
    </div>
);

export default buildControl;
