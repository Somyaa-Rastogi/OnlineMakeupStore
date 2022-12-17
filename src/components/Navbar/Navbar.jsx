import React from 'react';
import './Navbar.css';
import BrandLink from '../BrandLink';
import NavLinks from '../NavLinks';
import HeartIcon from '../Icons/HeartIcon';
import CartIcon from '../Icons/CartIcon';

const Navbar = () => {
    return (
        <nav className="mx-auto font-krona flex justify-between p-3 bg-light-grey">
            <BrandLink />

            <div className="flex items-end">
                <NavLinks />
            
                <div className="flex">
                    <HeartIcon />
                    <CartIcon />
                </div>
            </div>
        </nav>    
    )
}

export default Navbar