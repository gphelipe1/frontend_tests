import React, { Fragment } from "react";
import { Table } from "reactstrap";
import './index.css'

function TableTag(props) {
  
  return ( 
    <Fragment>
          <Table>
            <thead>
              <tr>
                {props.Headers.map((value)=>{
                  return [
                    <th>{value}</th>
                  ];  
                })
                }
              </tr>
            </thead>
            <tbody>
                  {props.Rows.map((value,key) => {
                   return <tr>{ value.map((valorF,chave) => {
                      return <td>{valorF}</td>
                     })
                  }</tr>;
                  })}
            </tbody>
          </Table>
    </Fragment>
  );
}

export default TableTag;