import React from 'react';

export const MainLayout = ({children}) => {
    const styles = {
        fontSize: '50px',
        fontWeight: '700',
        paddingTop: '5rem',
    }
    return(
        <div style = {styles}>{children}</div>
    )
}