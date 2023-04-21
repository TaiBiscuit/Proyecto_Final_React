import React from 'react';
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent';
import NavItem from '../NavItem/NavItem';
import noLogo from '../../images/logo.png';

export const NavBarComponent = () => {
    return(
    <nav className="navbar">
        <div className='logoBox'>
            <NavItem label={<img src={noLogo} alt="placeHolder" className='logo' />} src="/"></NavItem>
        </div>
        <ul className="lists">
        <li>
            <NavItem label="Home" src="/"/>
        </li>
        <li>
            <NavItem label="Saved" src="/saved"/>
        </li>
        </ul>
        <CartWidgetComponent/>
    </nav>
    );
}