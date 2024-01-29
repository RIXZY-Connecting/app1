import React from 'react'
import {userContext} from './context'

export default class Header2 extends React.Component{
    static contextType = userContext


    render(){
        let[user,setUser]=this.context
        
        const headerStyle={
            backgroundColor:'#cee',
            textAlign:'center',
            padding : 5
        }
        const onClickSignout = (event) => {
            event.preventDefault()
            setUser('')
        }
        const onClickSign = (event) => {
            event.preventDefault()
            setUser('Supawich')
        }
        return(
            <div style={headerStyle}>
                <a href="">Home</a>&nbsp;-&nbsp;
                <a href="">Product</a>&nbsp;-&nbsp;
                <a href="">Contect Us</a>&nbsp;-&nbsp;
                {
                    (user)
                    ?<span>[{user}&nbsp;:&nbsp;<a href=""
                             onClick={onClickSignout}>Signout</a>]</span>
                    :<span>[<a href="" onClick={onClickSign}>
                            Signin</a>]</span>
                }
            </div>
        )
    }
}