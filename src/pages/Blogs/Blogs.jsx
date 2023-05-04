import React from 'react';

const Blogs = () => {
    return (
        <div >
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
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-48 my-8">
                {/* First Card */}
                <div className="card w-96 h-100 bg-blue-300 text-primary-content mt-6 hover:bg-slate-300">
                    <div className="card-body">
                        <h2 className="text-black card-title font-bold text-xl"> Question No-1: Tell us the differences between uncontrolled and controlled components.</h2>
                        <h2 className="text-black card-title"> Answer:</h2>
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
                {/* Second Card */}
                <div className="card w-96 h-100 bg-blue-300 text-primary-content mt-6 hover:bg-slate-300">
                    <div className="card-body">
                        <h2 className="text-black card-title font-bold text-xl"> Question No-2: How to validate React props using PropTypes</h2>
                        <h2 className="text-black card-title"> Answer:</h2>
                        <p className='text-black text-sm'>Props are an important mechanism for passing the read-only attributes to React components.

                            <ul>
                                <li>
                                    <strong>1. PropTypes.any :</strong>The prop can be of any data type.</li>
                                <li><strong>2. PropTypes.bool : </strong>The prop should be a Boolean</li>
                                <li> <strong>3. PropTypes.number :</strong> The prop should be a number.</li>
                                <li> <strong>4. PropTypes.string :</strong> The prop should be a string.</li>
                                <li><strong>5. PropTypes.func : </strong>The prop should be a function.</li>
                                <li><strong>6. PropTypes.array :</strong> The prop should be an array.
                                </li>
                            </ul>
                        </p>


                    </div>
                </div>
                {/* Third Card */}
                <div className="card w-96 h-100 bg-blue-300 text-primary-content mt-6 hover:bg-slate-300">
                    <div className="card-body">
                        <h2 className="text-black card-title font-bold text-xl"> Question No-3: Tell us the difference between nodejs and express js.</h2>
                        <h2 className="text-black card-title"> Answer:</h2>
                        <p className='text-black text-sm'><strong>Express JS</strong>

                            Express is a minimal and flexible NodeJS framework that provides a robust set of features for web applications like routing, sessions, caching, etc. Comparing Node JS vs Node JS Express, the latter manages all the clutter that comes with setting up a server and gives you a simple interface to build your routes and then use them for handling requests made by the users.



                        </p>
                        <p className='text-black text-sm'><strong>Node.JS</strong>
                            Node.JS uses an event-driven, non-blocking I/O model which makes it lightweight and efficient for the server environment that has to handle multiple concurrent connections with low latency. Using NodeJS will allow you to create such an application because it has high performance and speed.
                        </p>

                    </div>
                </div>
                {/* Fourth card */}
                <div className="card w-96 h-100 bg-blue-300 text-primary-content mt-6 hover:bg-slate-300">
                    <div className="card-body">
                        <h2 className="text-black card-title font-bold text-xl"> Question No-4: What is a custom hook, and why will you create a custom hook?</h2>
                        <h2 className="text-black card-title"> Answer:</h2>
                        <p className='text-black text-sm'><strong></strong>

                        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.



                        </p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;