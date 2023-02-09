import { Component } from "react";

class Marks extends Component{
    constructor(){
        super()
        this.state={marks:""}
    }
    setMarks=(e)=>{this.setState({marks:e.target.value})}
    render(){
        console.log(this.state.marks)
        return(<input onChange={this.setMarks} type="text" placeholder="enter Marks" value={this.state.marks}/>)
    }
}
export default Marks