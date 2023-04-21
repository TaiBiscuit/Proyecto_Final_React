import React, { createContext, useState } from 'react';

export const SavedContext = createContext();

export const SavedProvider = ({children}) => {
    const [savedItems, setSavedItems] = useState();

    return(
        <SavedContext.Provider value={{savedItems, setSavedItems}}>
            {children}
        </SavedContext.Provider>
    )
}