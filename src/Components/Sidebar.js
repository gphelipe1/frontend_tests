import React from 'react'
import App from '../App'
import '../App.css'
import { Route } from 'react-router-dom'
import Logo from '../Assets/logo.png'

import {SidebarData} from './SidebarData'

function Sidebar() {
    
    return (
        <div className="Sidebar">
            <img src={Logo}/>
            <ul className = "SidebarList">
            {SidebarData.map((val,key) => {
                if(val.breakon == "false"){
                return (
                    
                    <li 
                    className="SidebarRow"
                    key={key} 
                    id={window.location.pathname == val.link ? "active" : ""}
                    onClick={() => {
                        window.location.pathname = val.link;
                    }}

                    >
                        {" "}
                        
                        <div id="title">{val.title}</div>
                    </li>
                )
                }else{
                    return(
                        <span className="breakon">{val.title}</span>
                    )
                }
                
            })}
            </ul>
        </div>
    )
}

export default Sidebar
