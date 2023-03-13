import React from 'react';
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent';
import { NavItem } from '../NavItem/NavItem';
import noLogo from '../../images/logo.png';

export const NavBarComponent = () => {
    return(
    <nav className="navbar">
        <div className='logoBox'>
        <img src={noLogo} alt="placeHolder" className='logo' />
        </div>
        <ul className="lists">
        <li>
            <NavItem category = 'Home'/>
        </li>
        <li>
            <NavItem category = 'Saved'/>
        </li>
        <li>
            <NavItem category = 'Categories'/>
        </li>
            <NavItem category = 'Buy Again'/>
        </ul>
        <CartWidgetComponent/>
    </nav>
    );
}