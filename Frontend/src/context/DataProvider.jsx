import React, { createContext, useState } from 'react'

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {








    return (
        <DataContext.Provider value={{}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider