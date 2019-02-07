import React from 'react';
import IngredientControl from './IngredientControl.js'
import {myConst} from '../../App'

function BurgerForm(props) {
    return (
        <div>
            <p>Current price: <b>{props.getTotalPrice()}</b></p>
            {console.log(myConst)}
            {myConst.map(element => <IngredientControl
                key={element.name}
                label={element.label}
                onRemoveIngredient={() => props.clickRemoveIngredient(element.name)}
                onAddIngredient={() => props.clickAddIngredient(element.name)}
                ingredientQuantity={() => props.quantity(element.name)}
            />)}
        </div>
    )
}

export default BurgerForm;