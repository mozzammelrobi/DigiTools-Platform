import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';


const navLinks = [
    {
        id: 1,
        name: "Products",
        path: "/products",
    },
    {
        id: 2,
        name: "Features",
        path: "/features",
    },
    {
        id: 3,
        name: "Pricing",
        path: "/pricing",
    },
    {
        id: 4,
        name: "Testimonials",
        path: "/testimonials",
    },
    {
        id: 5,
        name: "FAQ",
        path: "/faq",
    },
];

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navLinks.map(link => <li key={link.id}> <a href={link.path} >{link.name}</a> </li>)
                        }
                    </ul>
                </div>
                <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl font-bold"> <span>DigiTools</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map(link => <li key={link.id}> <a href={link.path}>{link.name}</a> </li>)
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <span className='relative'> <span className=' absolute left-2 -top-[10px] text-red-700 text-[10px]'>1</span><FiShoppingCart /></span>
                <button>Login</button>
                <a className="btn rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;