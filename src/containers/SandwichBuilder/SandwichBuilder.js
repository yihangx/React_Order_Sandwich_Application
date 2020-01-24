import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Sandwich from '../../components/Sandwich/Sandwich';

class SandwichBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render () {
        return (
            <Aux>
                <Sandwich ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default SandwichBuilder;
