import React, {Component} from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import BurgerForm from './components/BurgerForm/BurgerForm.js'


const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат'},
    {name: 'cheese', price: 20, label: 'Сыр'},
    {name: 'meat', price: 50, label: 'Мясо'},
    {name: 'bacon', price: 30, label: 'Бекон'}
];


class App extends Component {
    state = {
        ingredients: {
            salad: {count: 1, total: 0},
            cheese: {count: 1, total: 0},
            meat: {count: 1, total: 0},
            bacon: {count: 1, total: 0}
        }
    };


    addIngredient = (name) => {
        let ingredient = {...this.state.ingredients[name]};

        let price = availableIngredients.find(item => item.name === name).price;
        ingredient.count += 1;
        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};

        ingredients[name] = ingredient;

        let state = {...this.state};

        state.ingredients = ingredients;

        this.setState(state);
    };

    removeIngredient = (name) => {

        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;
        if (ingredient.count > 0) {
            ingredient.count -= 1;
        }
        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        ingredients[name] = ingredient;

        let state = {...this.state};
        state.ingredients = ingredients;

        this.setState(state);
    };

    getQuantity = (ingredient) => {
          return this.state.ingredients[ingredient].count
    };

    getTotalPrice = () => {
        let totalPrice = 20;
        availableIngredients.map((ingredient) => {
            totalPrice += this.state.ingredients[ingredient.name].count * ingredient.price
        });
        return totalPrice;
    };

    isDisabled = (ingredient) => {
        console.log(ingredient);
        return this.state.ingredients[ingredient].count === 0
    };


    render() {
        return (
            <div className="App">
                <Burger ingredients={this.state.ingredients}/>
                <div className="Form">
                    <BurgerForm getTotalPrice={this.getTotalPrice}
                                clickRemoveIngredient={this.removeIngredient}
                                clickAddIngredient={this.addIngredient}
                                quantity={this.getQuantity}
                                isDisabled={this.isDisabled}
                    />
                </div>
            </div>
        );
    }
}

export default App;
export const myConst=availableIngredients;