import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './index.css'

function Card() {
    return(
    <div>
        <div className = "Container">  
            <section className = "forms">
                <form>
                    <h2>Sistema de Gestão de cursos do IEL</h2>
                    <div id="login">
                        <TextField variant = "outlined" size='small' fullWidth="true" color ="#09766E" className="inputs" type="text"  placeholder="Login"/>
                    </div>
                    <div id="password">
                        <TextField variant = "outlined" size='small' fullWidth="true" color ="#09766E" className="inputs" type="password" placeholder="Password" />
                    </div>
                    <div>
                        <button className="button"><span>Entrar</span></button>
                    </div>
                </form>
            </section>
        </div>
    </div>
    );
}


export default Card