import React, {useState} from 'react';

import {close, logo, menu} from '../assets';
import {navLinks} from '../constants';

function NavBar() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = function () {
        setToggle((previousState) => !previousState);
    }

    return (
        <nav className={`w-full flex py-6 justify-between items-center navbar`}>
            <img className="w-[124px] h-[32px]" src={logo} alt="hoobank"/>
            <ul className="line-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 items-center justify-end">
                <img src={toggle ? close : menu} className="w-[28px] h-[28px] object-contain" onClick={handleToggle}
                     alt="menu"/>

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="line-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;