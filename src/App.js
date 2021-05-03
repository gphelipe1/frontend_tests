import './App.css';
import React from 'react'
import Sidebar from './Components/Sidebar'
import Cursos from './Pages/Cursos'
import NewCourse from './Pages/Cursos/Novo Curso/index'


function App() {
  return (
    <div>
      <div className="side-div">
        <Sidebar/>      
      </div>
      <div className="content">
        <Cursos/>
      </div>
    </div>
  );
}

export default App;
