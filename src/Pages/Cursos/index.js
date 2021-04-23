import './index.css'
import Header from '../../Components/Header/index'
import '../../../src/global.css'
import TableCurso from '../../Components/Table/index'
import Edit from '../../Assets/editar_icon.png'
import Details from '../../Assets/ver_mais.png'
import InputTag from '../../Components/SearchInput'

function handler(){
  alert('clicked')
}

function search(FULLTable){
  
}

function Cursos() {

  const Cursos = [
    ['Curso Um Pouco Longo','190283','2',<img src={Edit} onClick={handler}/>,<img src={Details} onClick={handler}/>],
    ['Curso Arretado sobre Física Nuclear aplicada em Mecâniaca de Aeronaves','190283','2',<img src={Edit} onClick={handler}/>,<img src={Details} onClick={handler}/>],
    ['Curso Importante','190283','2',<img src={Edit} onClick={handler}/>,<img src={Details} onClick={handler}/>],
    ['Curso Legal ','190283','2',<img src={Edit} onClick={handler}/>,<img src={Details} onClick={handler}/>],
    ['Curso Bacana Sobre Matemática Aplicada','190283','2',<img src={Edit} onClick={handler}/>,<img src={Details} onClick={handler}/>],
    ['Curso Difícil','190283','2',<img src={Edit} onClick={handler}/>,<img src={Details} onClick={handler}/>],
    ['Curso Ofertado Alguma Coisa','190283','2',<img src={Edit} onClick={handler}/>,<img src={Details} onClick={handler}/>],
  ]
      
  const thispath = [
    "Menu de Cursos",
    "Cursos",
    "Novo Curso"
  ]

  return (
      <div>
        <Header path={thispath}/>
        <div className = "down-right-div">
          <button className="btn-creates btn">
            Novo Curso
            </button>
            <InputTag/>
        </div>
        <TableCurso Headers={['Nome', 'Código', 'Turma', 'Editar', 'Detalhes']} Rows={Cursos}/>
      </div>
  );
}

export default Cursos;