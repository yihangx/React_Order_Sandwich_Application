import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Sandwich/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class SandwichBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
          this.setState({purchasable: sum > 0});
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients:updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }
    removeIngredientHandler= (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients:updateIngredients});
        this.updatePurchaseState(updateIngredients);

    }
    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = () => {
        alert("Continue!");
    }
    render () {
        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                  <OrderSummary ingredients={this.state.ingredients}
                                purchaseCancelled={this.purchaseCancelHandler}
                                price={this.state.totalPrice}
                                purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <Sandwich ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler}
                                ingredientRemoved={this.removeIngredientHandler}
                                disabled={disabledInfo}
                                price={this.state.totalPrice}
                                ordered={this.purchaseHandler}
                                purchasable={this.state.purchasable} />
            </Aux>
        );
    }
}

export default SandwichBuilder;
