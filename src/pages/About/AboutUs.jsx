import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="bg-slate-100">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className='lg:mx-36 my-4 sm:pl-8'>
                        <img class="lg:h-80 lg:w-50 sm:w-100" src="./public/images/pasta.png" alt="" />
                    </div>
                    <div className='mx-8'>
                        <h1 className="pt-12 pb-4 lg:pl-6 text-3xl font-extrabold hover:text-blue-600">About Us</h1>
                        <h2 className="font-bold text-2xl py-6 px-6">Why Choose Us?</h2>

                        <p className="text-sm lg:px-8 pb-6"><strong>RecipeHub</strong> Recipes is here to help you cook delicious meals with less stress and more joy.We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about. </p>
                        
                    </div>



                </div>

            </div>

        </div>
    );
};

export default AboutUs;