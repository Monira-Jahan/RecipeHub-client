import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="navbar sm:w-100 rounded drop-shadow-xl bg-gradient-to-r from-violet-400 to-fuchsia-400 lg:text-white text-gray-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs" className="justify-between">Blog</Link>
                        </li>
                        <li>
                        {
                            user ? <>
                                <span>{user.email}</span>
                                <button onClick={handleLogout} className="btn btn-xs">Sign Out</button>

                            </> : <Link className="btn btn-ghost normal-case text-base" to="/login">Login</Link>
                        }
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">RecipeHub</a>
            </div>
            <div className="navbar-center w-100 hidden lg:flex">
                <ul className="menu menu-horizontal ">
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <button onClick={handleLogout} className="btn btn-xs">Sign Out</button>

                        </> : <Link className=" " to="/login">Login</Link>
                    }
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;