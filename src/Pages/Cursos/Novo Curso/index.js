import React, { useState } from 'react';
import '../../../global.css'
import './index.css'
import Header from '../../../Components/Header/index'
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Dropdown from '../../../Components/Dropdown/index'
import { setGridPageStateUpdate } from '@material-ui/data-grid';

function NovoCurso() {
    const [tagConteudo, setTagConteudo] = useState("");
    const [tagKey, setTagKey] = useState(0);
    const [modal, setModal] = useState('');
    const [resetDropdownState, setResetDropdownState] = useState(false)

    const[nomeCurso, setNomeCurso] = useState('');
    const[centroCurso, setCentroCurso] = useState('');
    const [conteudoList,addConteudo] =  useState([]);
    const[cargaHoraria, setCargaHoraria] = useState('');
    const[modalidade,setModalidade] = useState('')
    const[publicoAlvo, setPublicoAlvo] = useState('');
    const[observacoes, setObservacoes] = useState('');

    const thispath=[
        "Menu de Cursos",
        "Cursos",
        "Novo Curso",
    ]

    const defineClass = () => {
        if(conteudoList !== []){
            return "hidden"
        }else{
            return "hidden"
        }
    }

    const useStyles = makeStyles((theme)=>({
        root: {
            background: '#61958C',
            color:'white',
            fontWeight:'bold',
            marginRight: '10px',
            marginTop: '10px;'
        },
        
    }));

    const classes=useStyles();

    const myFunction = (e) => {
        if(e.key == 'Enter'){

            addConteudo([...conteudoList,{key:tagKey,tagLabel: e.target.value}]);
            setTagKey(tagKey + 1);
            e.target.value=setTagConteudo("")
        }
    }


    const handleDelete = chipToDelete => () => {
        addConteudo(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    }


    const handleTagChange = (event) => setTagConteudo(event.target.value)

    const handleModalidade = (value) => {
        setResetDropdownState(false)
        setModalidade(value)
      };

    const handleNome = (e) => {
        setNomeCurso(e.target.value)
    }
    
    const handleCentro = (value) => {
        setResetDropdownState(false)
        setCentroCurso(value)
    }
    
    const handleCarga = (e) => {
        setCargaHoraria(e.target.value)
    }
    
    const handlePublico = (e) => {
        setPublicoAlvo(e.target.value)
    }
    
    const handleObservacao = (e) => {
        setObservacoes(e.target.value)
    }
    
    const resetDropdown = () => {
        setResetDropdownState(true)
    }

    const Tags = conteudoList.map((value, index) => {
        return <Chip className={classes.root} key={value.key} label={value.tagLabel} onDelete={handleDelete(value)}/>
        
    })

    const adicionaCurso = () => {
        document.getElementById("form-curso").reset();
        addConteudo(chips => chips.filter(chip => chip.key !== chip.key));
        resetDropdown();
        alert("Curso Adicionado")

        //========================================================
        //================ SEND STATES TO BACKEND ================
        //========================================================
    }

    return (
        <div className="fullContent">
            <Header path={thispath}/>

            <h2 className="page-title">Novo Curso</h2>
            <form id="form-curso">
                <div className="forms-div">
                    <div className = "input-divs">
                        <label className="label-form" >Nome do Curso</label>
                        <input onChange={handleNome} id="nome_curso_input" className="input-form long-form" type="text" id="nome_curso"/>
                    </div>
                    <div className = "input-divs">
                        <Dropdown title="Centro de Curso" list={["Apoio às Ações de inovação - 3.02.01.02.01.04","Capacitação Empresarial - 3.03.05.01.01.01", "CGE - 3.02.01.02.01.02", "Consultoria de Recertificação - 3.02.01.02.01.03", "Empreendedorismo - 3.03.05.01.01.02", "PROCEM - 3.02.01.02.01.01"]} label="Centro de Curso" handler={handleCentro} resetFlag={resetDropdownState}/>
                    </div>
                    <div className = "input-divs">
                        <label className="label-form">Carga Horária</label>
                        <input onChange={handleCarga} id="carga_h_input" className="input-form" type="text" id="carga"/>
                    </div>
                    <div className = "input-divs">
                        <Dropdown title="Modalidade do Curso" list={["Processos","Pessoas","Inovação", "Mercado"]} label="Modalidade" handler ={handleModalidade} resetFlag={resetDropdownState}/>
                    </div>
                    <div className = "input-divs">
                        <label className="label-form" >Conteúdo</label>
                        <input onChange={handleTagChange}  className="input-form" type="search" id="conteudo" value={tagConteudo} onKeyDown={myFunction}/>
                    </div>
                    <div className = "input-divs">
                        <label className="label-form" >Público Alvo</label>
                        <textarea onChange={handlePublico} id="publico_input" rows="4" cols="50"  className="input-form" type="text" id="publico_alvo"/>
                    </div>
                    <div className = "input-divs">
                        <label className="label-form">Observações</label>
                        <textarea onChange={handleObservacao} id="obs_input" rows="4" cols="50"  className="input-form" type="text" id="obs"/>
                    </div>
                </div>
                </form>
            
                <div className="bottom-content-div">
                    <span className="title-span">Conteúdo</span>
                    <div className="tags-ul">
                        {Tags}
                    </div>
                    <div className="buttons-div">
                        <button className="border-btn cancel-btn" id="btn-cancelar">Cancelar</button>
                        <button type="form" onClick={adicionaCurso} className="btn-creates add-btn" id="btn-adicionar">Adicionar</button>
                    </div>
                </div> 
        </div>
    )
}

export default NovoCurso;
