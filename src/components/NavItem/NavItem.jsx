import React from 'react';

export const NavItem = (props) => {
    return (
        <button className='nav-btn'>{props.category}</button>
    )
}