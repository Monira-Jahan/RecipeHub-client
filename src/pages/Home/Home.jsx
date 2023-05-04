import React, { useEffect, useState } from 'react';
import ChefsSection from '../ChefsSection/ChefsSection';

const Home = () => {
    const[chefs,setChefs]=useState();
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
            {/* banner Section started */}
            <div className="bg-slate-100">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className='mx-8'>
                        <h1 class="pt-12 pb-4 lg:pl-6 text-3xl font-extrabold">One Click To find Your
                        <br/> Yummy Italian Cuisine Recipe</h1>

                        <p className="text-sm lg:px-8 pb-6"><strong>RecipeHub</strong> Recipes is here to help you cook delicious meals with less stress and more joy.We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about. </p>
                        <div className="lg:ml-6 form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search Recipe Here" className="input input-bordered" />
                                <button className="btn btn-square bg-gradient-to-r from-violet-400 to-fuchsia-400 border-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:mx-36 my-4 sm:pl-8'>
                        <img class="lg:h-80 lg:w-50 sm:w-100" src="./public/images/italian-cuisine.png" alt="" />
                    </div>


                </div>

            </div>
            {/* Banner section ended */}
         {/* Chef Section */}
            <div>
            <h3 className="text-center pt-5 pb-2 text-3xl font-extrabold">Our Chefs </h3>
                <p className='text-center text-xs font-normal pb-3 lg:px-48'>Simply Recipes was founded in 2003 by Elise Bauer as a home cooking blog to record her favorite family recipes. Today, Simply Recipes has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. </p>
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-48 h-100">
                {
                    chefs ?.map(chef => <ChefsSection
                        key={chef.id}
                        chef={chef}
                    >
                        
                    </ChefsSection>)
                }
                </div>
            </div>
        </div>


    );
};

export default Home;