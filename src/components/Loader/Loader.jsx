import React from 'react';
import { LineWobble } from '@uiball/loaders'

export const Loader = () => {

    const styles = {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    };

    return(
        <div style={styles}>
        <LineWobble 
        size={80}
        lineWeight={5}
        speed={1.75} 
        color="black" 
        />
        </div>
    );
};
