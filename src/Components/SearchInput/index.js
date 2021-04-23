import React from 'react'
import './index.css'

export default function InputTag(props){
    return(
        <input type="text" id="myInput" onKeyUp={props.func} placeholder="Procurar" title="searc"/>
    );
}