import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';
const RecipeDetails = ({recipe}) => {
    const recipeDetails=useLoaderData();
    console.log(recipeDetails);
    return (
        <div>
            </div>

            
    
    );
};

export default RecipeDetails;