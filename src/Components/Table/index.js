import React, { useState,Fragment,Component } from "react";
import './index.css';
import { Table } from "reactstrap";
import Pagination from './Pagination'

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
    const originalData = getData(this.props.Rows )  ;
    const columns = getColumns(this.props.Headers);
    const filteredData = getData(originalData)

    this.state = {
      originalData,
      columns,
      filteredData,
      searchTerm:"",
      slicedData: [],
      currentPage: 1,
      elementPerPage: 10,
    };

    this.paginate = this.paginate.bind(this)
  }

  paginate(pageNumber){
    this.state.currentPage = pageNumber
    console.log(this.state.currentPage)
  }
  
  render(){

    const indexOfLastElement = this.state.currentPage * this.state.elementPerPage;
    const indexOfFirstElement = indexOfLastElement - this.state.elementPerPage;
    this.state.filteredData = this.state.originalData.slice(indexOfFirstElement, indexOfLastElement)

    return ( 
      <div>
      <Fragment>
          <input className="search-btn" type="search" id="myInput"  onChange={(event)=>{this.setState({searchTerm: event.target.value})}} placeholder="Procurar" title="search"/>
          
            <Table>
              <thead>
              <tr>
                {this.state.columns.map((value)=>{
                  return [ <th>{value}</th> ]
                })}
              </tr>
            </thead>
            <tbody>
                    {this.state.searchTerm == "" ? this.state.filteredData.map((value,key) => {
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
            <Pagination elementPerPage={this.state.elementPerPage} totalElement={this.state.originalData.length} paginate={this.paginate}/>
      </Fragment>
      
      </div>
    );
  }
}
export default TableELement;