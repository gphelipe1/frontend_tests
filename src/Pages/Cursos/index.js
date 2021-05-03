import React from "react";
import './index.css'
import Header from '../../Components/Header/index'
import '../../../src/global.css'
import TableCurso from '../../Components/Table/index'
import dataFile from './data.js'
import Edit from '../../Assets/editar_icon.png'
import Details from '../../Assets/ver_mais.png'

function Cursos() {

  const thispath = [
    "Menu de Cursos",
    "Cursos", 
  ];
  
  function handlerEdit(codigo){
    alert(codigo.key)
  }

  function handlerDetails(codigo){
    alert(codigo.key)
  }
  
  function setOptions(data){
    data.map((obj,i) => {
      obj['Editar'] = <img src={Edit}key={obj.Codigo_Curso} onClick={() => handlerEdit(obj.Editar)}/>
      obj['Detalhes'] = <img src={Details}key={obj.Codigo_Curso}onClick={() => handlerDetails(obj.Detalhes)}/>
    })

    
    return data
  }

  setOptions(dataFile) 

  const Table = <TableCurso Headers={['Nome', 'Codigo', 'Turma', 'Editar','Detalhes' ]} Rows={dataFile} />

  return (
      <div>
        <Header path={thispath}/>
        <div className = "down-right-div">
          <button id="novoCurso" className="btn-creates btn">
            Novo Curso
            </button>
        </div>
        {Table}
      </div>
  );
}
export default Cursos;