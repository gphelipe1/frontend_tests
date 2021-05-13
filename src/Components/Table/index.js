import React, {Fragment,Component } from "react";
import './index.css';
import { Table } from "reactstrap";

function getData(props_data) {
  const dados = props_data.map((item,key) => {
    return (
      item
    );
  });
  return dados;
}

function getColumns(data) {
  const columns = [];
  data.forEach(element => {
    columns.push(element)
  });

  return columns;
}

class TableELement extends Component {
  constructor(props) {
    super(props);  
    const originalData = getData(this.props.Rows );
    const columns = getColumns(this.props.Headers);
    const slicedData = getData(originalData)

    this.state = {
      originalData,
      columns,
      slicedData,
      searchTerm:"",
      currentPage: 1,
      elementPerPage: 17,
      indexOfLastElement:0,
      indexOfFirstElement: 0,
      paginationStartINdex: 0,
      paginationEndINdex: 3,
      pagesLength: 0,
    };

    this.paginate = this.paginate.bind(this)
  }
  

  paginate(pageNumber){
    this.setState({currentPage: pageNumber})
    if(pageNumber!=1 && pageNumber != this.state.pagesLength){
      this.setState({paginationStartINdex: pageNumber - 2})
      this.setState({paginationEndINdex: pageNumber + 1 })
    } else if(pageNumber == 1){
      this.setState({paginationStartINdex: 0})
      this.setState({paginationEndINdex: 3})
    }else if(pageNumber == this.state.pagesLength){
      this.setState({paginationStartINdex: this.state.pagesLength- 3})
      this.setState({paginationEndINdex: this.state.pagesLength})
    }
  
  }
  

  render(){

    const pageNumbers=[];
    const numPages = Math.ceil(this.state.originalData.length/this.state.elementPerPage)
    for(var i=1; i <= numPages; i++){
      pageNumbers.push(i);
    }
    

    this.state.pagesLength = pageNumbers.length


    this.state.indexOfLastElement = this.state.currentPage * this.state.elementPerPage;
    this.state.indexOfFirstElement = this.state.indexOfLastElement - this.state.elementPerPage;
    this.state.slicedData = this.state.originalData.slice(this.state.indexOfFirstElement, this.state.indexOfLastElement)

    return ( 
      <div>
      <Fragment>
          <input className="search-btn" type="search" id="myInput"  onChange={(event)=>{this.setState({searchTerm: event.target.value})}} placeholder="Procurar" title="search"/>
          
            <Table>
              <thead>
              <tr >
                {this.state.columns.map((value)=>{
                  return [ <th>{value}</th> ]
                })}
              </tr>
            </thead>
            <tbody>
                    {this.state.searchTerm == "" ? this.state.slicedData.map((value,key) => {
                      return(
                        <tr>
                          {
                            Object.keys(value).map((key,i)=>{
                              return <td>{value[key]}</td>
                            })
                          }
                        </tr>
                      )
                    }) :  this.state.originalData.filter((val)=>{
                      if(this.state.searchTerm==""){
                        return val
                      }else{
                        for(let chave in val){
                          if(val[chave].toString().toLowerCase().includes(this.state.searchTerm.toLowerCase())){
                            return val
                          }
                        }
                      }
                    }).map((value,key) => {
                      return(
                        <tr>
                          {
                            Object.keys(value).map((key,i)=>{
                              return <td>{value[key]}</td>
                            })
                          }
                        </tr>
                      )
                    })}
              </tbody>
            </Table>
            <nav>
            <ul className = "pagination">
                <li className="page-item"> <button onClick={()=>this.paginate(1)} className ="page-link btn-page">First</button></li>
                {pageNumbers.slice(this.state.paginationStartINdex, this.state.paginationEndINdex).map(number => {
                    return( < li className="page-item">
                        <button onClick={()=>this.paginate(number)} className ={`page-link ${this.state.currentPage == number? "page-selected" : ""}`}>{number}</button>
                    </li>);
                })}
                <li className="page-item"> <button onClick={()=>this.paginate(this.state.pagesLength)} className ="page-link btn-page">Last</button></li>
                
            </ul>
        </nav>
      </Fragment>
      
      </div>
    );
  }
}
export default TableELement;