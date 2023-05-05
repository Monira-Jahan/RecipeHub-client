import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
const ChefDetails = () => {
    const chefDetails=useLoaderData();
    console.log(chefDetails);
    const[recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('https://b710-chef-recipe-hunter-server-monira-jahan.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
            <div className="bg-slate-100">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className='lg:mx-36 my-4 sm:pl-8'>
                        <img class="lg:h-80 lg:w-100 sm:w-100" src={chefDetails.picture} alt="" />
                    </div>
                    <div className='card w-96 bg-base-100 shadow-xl mx-8 my-4'>
                    <div className="card-body">
                    <h2 className="card-title font-bold text-xl">{chefDetails.name}</h2>
                    <p><strong>Experience:</strong> {chefDetails.description}</p>
                    <p><strong>Experience:</strong> {chefDetails.years_of_experience}</p>
                    <div className="flex">
                    <p className='font-medium text-sm'><strong>Numbers of Recipe:</strong> {chefDetails.numbers_of_recipes}</p>
                    <div><FaRegThumbsUp/> </div>
                    <p className='font-medium text-sm'><strong> Likes:</strong> {chefDetails.likes}</p> 
                        </div>
                    
                </div>
                        
                    </div>
                    


                </div>


            </div>
            
{/* recipe */}
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:mx-6 w-25 h-100">
                <h1>Recipe Details</h1>
                {
                    recipes ?.map(recipe => <RecipeDetails
                        key={recipe.id}
                        recipe={recipe}
                    >
                        
                    </RecipeDetails>)
                }
                </div>
        </div>
    );
};

export default ChefDetails;