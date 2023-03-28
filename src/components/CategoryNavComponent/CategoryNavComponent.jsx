import React from 'react';
import NavItem from '../NavItem/NavItem';


export const CategoryNavComponent = () => {
    return(
        <nav className="catnavbar">
        <ul className="lists">
        <li>
            <NavItem label="Men's Clothing" src="/category/men's clothing"/>
        </li>
        <li>
            <NavItem label="Women's Clothing" src="/category/women's clothing"/>
        </li>
        <li>
            <NavItem label="Jewlery" src="/category/jewelery"/>
        </li>
        <li>
            <NavItem label="Electronics" src="/category/electronics" />
        </li>
        </ul>
        </nav>
    )
}