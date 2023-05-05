import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-6 shadow-2xl rounded">
                
                <div className="hero-content lg:flex-row flex-col ">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold pt-4 hover:text-violet-500">Contact Us!</h1>
                        <p className="py-6 px-12 font-medium"> Recipes is here to help you cook delicious meals with less stress and more joy.We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.</p>
                    </div>
                    <div className="card flex w-full max-w-sm shadow-3xl  bg-base-100">
                        <div className="card-body rounded bg-gradient-to-r from-violet-400 to-fuchsia-400">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white font-bold label-text"> Your Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>
                            <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>


                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;