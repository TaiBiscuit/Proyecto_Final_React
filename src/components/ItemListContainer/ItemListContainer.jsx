import React from 'react';

export const ItemListContainer = (props) => {
    return(
        <div className='greetingsBox'>
        <p className='greetings'>{props.greetings}</p>
        <p className='sub-title'>{props.subtitle}</p>
        </div>
    );
}