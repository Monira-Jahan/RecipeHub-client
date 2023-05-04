import React from 'react';

const Blogs = () => {
    return (
        <div>
            {/* banner Section started */}
            <div className="bg-slate-100">
                <div className="">
                    <div className='mx-8'>
                        <h1 class="pt-12 pb-4 lg:pl-6 text-3xl font-extrabold text-center">Blogs</h1>

                        <p className="text-sm lg:px-48 pb-6 text-center"><strong>RecipeHub</strong> Recipes is here to help you cook delicious meals with less stress and more joy.We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about. </p>
                    </div>
                </div>
            </div>
            {/* Banner section ended */}
            <div>
                {/* First Card */}
                <div className="card w-96 h-100 bg-blue-300 text-primary-content mt-6 hover:bg-slate-300">
                    <div className="card-body">
                        <h2 className="text-black card-title"> Question No-1: Tell us the differences between uncontrolled and controlled components.</h2>
                        <p className='text-black'><strong>Controlled conponents</strong>
                        <ul>
                            <li>
                                1. Managed by React state
                                2. Parent component updates state on user interaction
                                3. Generally faster as there's less state management
                            </li>
                        </ul>
                        </p>
                        <p className='text-black'><strong>Uncontrolled conponents</strong>
                        <ul>
                            <li>
                                1. Managed by component's own internal state
                                2. Component updates own internal state on user interaction
                                3. Generally slower as there's more state management
                            </li>
                        </ul>
                        </p>
                        
                    </div>
                </div>
               
            </div>

        </div>
    );
};

export default Blogs;