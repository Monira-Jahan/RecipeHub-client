import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ChefsSection = ({chef}) => {
    const {id,picture, name, years_of_experience, numbers_of_recipes, likes } = chef;
     
    
    
    return (
   
        <div className="">
            <div className="card bg-violet-300 lg:w-96 sm:mx-3 h-100 glass mb-8">
                <figure><LazyLoadImage className="h-64 w-96 " src={picture} alt=" " /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-xl">{name}</h2>
                    <p><strong>Experience:</strong> {years_of_experience}</p>
                    <div className="flex">
                    <p className='font-medium text-sm'><strong>Numbers of Recipe:</strong> {numbers_of_recipes}</p>
                    <div><FaRegThumbsUp/> </div>
                    <p className='font-medium text-sm'><strong> Likes:</strong> {likes}</p> 
                        </div>
                    <div className="card-actions justify-start">
                        <Link to={`chefdetails/${id}`} className="btn btn-primary">View Recipes</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefsSection;