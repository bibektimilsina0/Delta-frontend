import React from "react";
import logo from '../image/download.png'
import { Link } from 'react-router-dom';
// Navbar
function Navbar() {
    return (
        <section className="navbar bg-[#1D3557] text-white py-4 flex">
            <div className="logosection flex items-center w-1/2">
                
                <ul id="logosection" className="flex items-center space-x-2">
                {/* eco-chain logo */}
                    <li>
                        <img src={logo} alt="logo" className="ml-8 rounded-full h-10 w-15" />
                    </li>
                    <li className="list" id="logo">
                        <span className="text-info">ECO--</span>CHAIN
                    </li>
                </ul>
            </div>
            <div className="list items-center w-1/2">
                <ul id="lists" className="flex space-x-2 justify-around">
                    <li className="list" id="home">
                        {/* route to home page */}
                    <Link to='/' className="hover:text-gray-300">
                            <button className="transition-colors duration-300 bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Home</button>
                        </Link>
                       
                    </li>
                    {/* route to blockchain Explorer */}
                    <li className="list" id="blockchain">
                    <Link to='/blockchain' className="hover:text-gray-300">
                            <button className="transition-colors duration-300 bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Blockchain Explorer</button>
                        </Link>
                         </li>
                    {/* <li className="list" id="transfer">
                        <Link to='/transfer' className="hover:text-gray-300">
                            <button className="transition-colors duration-300 bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Transfer</button>
                        </Link>
                    </li>
                    <li className="list" id="stack">
                        <Link to='/stack' className="hover:text-gray-300">
                            <button className="transition-colors duration-300 bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Stake</button>
                        </Link>
                    </li> */}
                    {/* profile section */}
                    <li className="list" id="profile">
                        <Link to='/profile' className="hover:text-gray-300">
                            <button className="transition-colors duration-300 bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Profile</button>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Uncomment the following code if needed */}
            {/* <div className="signup">
                <ul id="signup" className="flex space-x-4">
                    <li className="hover:text-gray-300">Log In</li>
                    <li>
                        <a href='#signup' className="hover:text-gray-300">Registration</a>
                    </li>
                </ul>
            </div> */}
        </section>
    );
}

export default Navbar;
