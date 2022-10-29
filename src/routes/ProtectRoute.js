import React from 'react'
import Custom_hook from '../custom-hooks/Custom_hook'
import {Navigate} from 'react-router-dom'

function ProtectRoute({children}) {
    const {currentUser}=Custom_hook()

  return currentUser? children : <Navigate to='login'/>
}

export default ProtectRoute