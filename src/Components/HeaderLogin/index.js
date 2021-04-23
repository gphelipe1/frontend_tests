import React from 'react'
import Logo from '../../Assets/logo.png'
function Header(){
    return(
        <div className="header-div">
            <img src={Logo}/>
        </div>
    );
}

export default Header;