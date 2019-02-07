import React from 'react';

function IngredientControl(props) {
    return (
        <div className="ingredient_control">
            <p> <span>{props.label}: {props.ingredientQuantity()}</span>
                <button type="submit" onClick={props.onRemoveIngredient}>Less</button>
                <button type="submit" onClick={props.onAddIngredient}>More</button>
            </p>
        </div>
    )
}

export default IngredientControl;

