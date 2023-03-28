import React from 'react';
import {Link} from 'react-router-dom';

const NavItem = ({label, src = '/'}) => {
    return (
        <Link to={src}>{label}</Link>
    )
}

export default NavItem