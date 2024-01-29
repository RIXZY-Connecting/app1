import React from 'react'
import { userContext } from './context.js'

export default function Content(){
    let user=React.useContext(userContext)
    
    const contentStyle = {
        backgroundColor: '#ddd',
        textAlign:'center',
        margin:10,
        padding:10
    }

    return(
        <div style={contentStyle}>
            {'Hello' + user}
        </div>
    )
}