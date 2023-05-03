import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user,logOut}=useContext(AuthContext);

    const handleLogout=()=>{
       logOut()
        .then(()=>{})
        .catch(error=>console.error(error));
    }
    return (

        <div className="">
            <div className="navbar rounded drop-shadow-xl bg-teal-200 text-gray">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">RecipeHub</a>
                </div>
                <div className="flex-none text-center">
                    <ul className="menu menu-horizontal px-1 not-italic hover:italic">
                        <Link className=" btn btn-ghost normal-case text-xl me-3 font-semibold" to="/home">Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl me-3 font-semibold" to="/blogs">Blog</Link>

                        {
                            user ? <>
                                <span>{user.email}</span>
                                <button onClick={handleLogout} className="btn btn-xs">Sign Out</button>

                            </> : <Link className="btn btn-ghost normal-case text-xl font-semibold" to="/login">Login</Link>
                        }
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;