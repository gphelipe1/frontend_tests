import React, { useState } from 'react';
import '../../../global.css'
import './index.css'
import Header from '../../../Components/Header/index'
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';




function NewCourse() {
    const [tagConteudo, setTagConteudo] = useState("");
    const [conteudoList,addConteudo] =  useState([]);
    const [tagKey, setTagKey] = useState(0);

    const thispath=[
        "Menu de Cursos",
        "Cursos",
        "Novo Curso",
    ]

    const useStyles = makeStyles({
        root: {
            background: '#61958C',
            color:'white',
            fontWeight:'bold',
            marginRight: '10px',
            marginTop: '10px;'
        },
    });
    const chipClass=useStyles();

    const myFunction = (e) => {
        if(e.key == 'Enter'){

            addConteudo([...conteudoList,{key:tagKey,tagLabel: e.target.value}]);
            setTagKey(tagKey + 1);
            e.target.value=setTagConteudo("")
        }
        console.log(conteudoList)
    }


    const handleDelete = chipToDelete => () => {
        addConteudo(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    }


    const handleTagChange = (event) => setTagConteudo(event.target.value)

    const Tags = conteudoList.map((value, index) => {
        return <Chip className={chipClass.root} key={value.key} label={value.tagLabel} onDelete={handleDelete(value)}/>
        
    })

    return (
        <div className="fullContent">
            <Header path={thispath}/>
            <form>
                <div className="forms-div">
                    <div className = "input-divs">
                        <label className="label-form" for="nome_curso">Nome do Curso</label>
                        <input  className="input-form long-form" type="text" id="nome_curso"/>
                        
                    </div>
                    <div className = "input-divs">
                        <label className="label-form" for="centro_curso">Centro de Curso</label>
                        <input  className="input-form long-form" type="text" id="centro_curso"/>
                    </div>
                    <div className = "input-divs">
                        <label className="label-form" for="carga">Carga Horária</label>
                        <input className="input-form" type="text" id="carga"/>
                    </div>
                    <div className = "input-divs">
                        <label className="label-form" for="modal">Modalidade</label>
                        <input  className="input-form" type="text" id="modal"/>
                    </div>
                    <div className = "input-divs">
                        <label className="label-form" for="conteudo" >Conteúdo</label>
                        <input  className="input-form" type="text" id="conteudo" value={tagConteudo} onChange={handleTagChange} onKeyDown={myFunction}/>
                    </div>
                    <div className = "input-divs">
                        <label className="label-form" for="publico_alvo">Público Alvo</label>
                        <textarea rows="4" cols="50"  className="input-form" type="text" id="publico_alvo"/>
                    </div>
                    <div className = "input-divs">
                        <label className="label-form" for="obs">Observações</label>
                        <textarea rows="4" cols="50"  className="input-form" type="text" id="obs"/>
                    </div>
                    
                </div>
            </form>
            <div className="bottom-content-div">
                <span className="title-span">Conteúdo</span>
                <div className="tags-ul">
                    {Tags}
                </div>
            </div>
        </div>
    )
}

export default NewCourse;
