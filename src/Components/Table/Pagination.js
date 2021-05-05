import React from 'react'

export default function Pagination({elementPerPage, totalElement, paginate}) {
    
    const pageNumbers = [];

    for(var i=1; i <= Math.ceil(totalElement/elementPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className = "pagination">
                {pageNumbers.map(number => {
                    return( < li className="page-item">
                        <a onCLick={()=> paginate(number)} href="!#" className ="page-link">{number}</a>
                    </li>);
                })}
            </ul>
        </nav>
    )
}
