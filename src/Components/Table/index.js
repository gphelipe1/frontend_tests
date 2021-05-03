import React, { useState,Fragment,Component } from "react";
import { Table } from "reactstrap";
import './index.css';

function getData(props_data) {
  const dados = props_data.map((item,key) => {
    return (
      item
    );
  });
  //setOptions(dados)
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
      selection: [],
      selectAll: false
    };
  }
  render(){
    return ( 
      
      <Fragment>
          <input className="search-btn" type="search" id="myInput"  placeholder="Procurar" title="search"/>
            <Table>
              <thead>
              <tr>
                {this.state.columns.map((value)=>{
                  return [ <th>{value}</th> ]
                })}
              </tr>
            </thead>
            <tbody>
                    {this.state.originalData.map((value,key) => {
                      return(
                        <tr>
                          {
                            Object.keys(value).map((key,i)=>{
                              console.log(value[key])
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