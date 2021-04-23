import './index.css'
import FileLogo from "../../Assets/files_logo.png"

function Header(props) {

  const userName ="Usuario"

  return (
      <div className="header-div">
        <div className="presentation-div">
            <span className="presentation"> Bem vindo, {userName} </span>
        </div>
        
        <div className="leave-btn-div">
            <button className="leave-btn" >Sair</button>
        </div>
        <div className="file-sym-div">
            <img src={FileLogo}/>
            <div className="title-n-path">
                <span className="title">Gestão de Cursos do IEL</span>
                <div>
                <span className="pathName">{props.path.map((val)=>{
                   return(<span>{val} <span className="spec-dot">&#183;</span> </span>);
                })}</span>
                </div>
            </div>
            
        </div>
        <hr/>
      </div>
  );
}

export default Header;