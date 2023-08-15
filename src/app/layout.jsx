import React from 'react'
import './globals.css'
import Providers from './Providers'


const layout = ({children}) => {


  return (
    <html>
        <body>
          <title>Erkan KOLAKAN portfolio</title>
          <Providers>
            {children}
          </Providers>
        </body>
    </html>
  )
}

export default layout
