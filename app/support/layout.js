
import Header from '@/components/Screen/Help/Header'
import React from 'react'

const layout = ({children}) => {
  return (
       <>
       <Header/>
        {children}
       </>
  )
}

export default layout