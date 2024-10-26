import React from 'react'
import { useState } from 'react'
import Context from './Context'

 const ContextProvider = ( {children}) => {
    const [cart, setCart] = useState(false)
    return ( 
    <Context.Provider value={{ cart, setCart }} >
     {children}
    </Context.Provider>
  )
}

export default ContextProvider;