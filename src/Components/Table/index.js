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
      pagesLength: 0,
      unextable: false,
      unprevable: true
    };

    this.paginate = this.paginate.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }
  
  updatePages(){
    if(this.state.currentPage >= 1){
      this.setState({unprevable: false})
    }else if(this.state.currentPage < 1){
      this.setState({unprevable: true})
    }
    if(this.state.currentPage <= this.state.pagesLength && this.state.currentPage >= 1){
      this.setState({unextable: false})
    }else if(this.state.currentPage > this.state.pagesLength){
      this.setState({unextable: true})
    }
  }

  prev(){
    let cur = this.state.currentPage;
    let next = cur - 1
    this.setState({currentPage: next})
    this.updatePages() 
  }

  next(){
    let cur = this.state.currentPage;
    let next = cur + 1
    this.setState({currentPage: next})
    this.updatePages()

  }

  paginate(pageNumber){
    this.setState({currentPage: pageNumber})
    this.updatePages()
  }
  

  render(){

    const pageNumbers=[];
    for(var i=1; i <= Math.ceil(this.state.originalData.length/this.state.elementPerPage); i++){
      pageNumbers.push(i)
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
                <button onClick={() => this.prev()} disabled={this.state.unprevable}> Prev </button>
                {pageNumbers.map(number => {
                    return( < li className="page-item">
                        <button onClick={()=>this.paginate(number)} className ="page-link">{number}</button>
                    </li>);
                })}
                <button onClick={() => this.next()} disabled={this.state.unextable} >Next</button>
            </ul>
        </nav>
      </Fragment>
      
      </div>
    );
  }
}
export default TableELement;