function Table(props){
    console.log(porps.info)
    return(
        <tr>
             <td>{props.info.name}</td>
            <td>{props.info.id}</td>
            <td>{porps.info.dept}</td>
            <td>{props.info.marks}</td> 
        </tr>
    )
}
export default Table
