import React, { useState,Fragment,Component } from "react";
import { Table } from "reactstrap";
import './index.css';

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

    this.state = {
      originalData,
      columns,
      filteredData: [originalData],
      searchTerm:"",
      selection: [],
      selectAll: false
    };

  }


  render(){
    return ( 
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
                    {this.state.originalData.filter((val)=>{
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
      </Fragment>
    );
  }
}
export default TableELement;