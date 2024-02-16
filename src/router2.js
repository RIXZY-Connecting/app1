import React from "react"
import {BrowserRouter,NavLink,Route,Routes} from 'react-router-dom'
import './navlink.css'
import Products from './products'
import Home from './home'
import Member from './member'

export default function Router3(){
    return(
        <BrowserRouter>
        <nav className="nav">
            <NavLink to='/'
                className={({isActive})=>
                isActive?"active_menu":"menu"}
            style={({isActive})=>{
                return{
                    fontWeight:isActive?"bold":""
                };
            }}>Home</NavLink>-&nbsp;
        <NavLink to='/product' className={({isActive})=>isActive?"active_menu":"menu"}>
            Product</NavLink> -&nbsp;
        <NavLink to='/member' className={({isActive})=>isActive?"active_menu":"menu"}>
            Member</NavLink> -&nbsp;
        <NavLink to='/contact' className={({isActive})=>isActive?"active_menu":"menu"}>
            Contact</NavLink> 
        </nav>
        <Routes style = {{margin:'20px'}}>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/member" Component={Member}/>
            <Route path="/contact" element={<div style={{textAlign:'center'}}>Contect Page</div>}/>
            <Route path="/*" element={<Products/>}/>
        </Routes>
        </BrowserRouter>
    )
}