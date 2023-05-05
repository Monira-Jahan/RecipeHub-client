import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="bg-slate-100">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className='lg:mx-36 my-4 sm:pl-8'>
                        <img class="lg:h-80 lg:w-50 sm:w-100" src="https://ibb.co/THBFbKs" alt="" />
                    </div>
                    <div className='mx-8'>
                        <h1 className="pt-12 pb-4 lg:pl-6 text-3xl font-extrabold hover:text-blue-600">About Us</h1>
                        <h2 className="font-bold text-2xl py-6 px-6">Why Choose Us?</h2>

                        <p className="text-sm lg:px-8 pb-6"><strong>RecipeHub</strong> Simply Recipes was founded in 2003 by Elise Bauer as a home cooking blog to record her favorite family recipes. Today, Simply Recipes has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a diverse group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.
                        
                     </p>
                        
                    </div>



                </div>

            </div>

        </div>
    );
};

export default AboutUs;