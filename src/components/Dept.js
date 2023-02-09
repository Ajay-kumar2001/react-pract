import { Component } from "react";

class Dept extends Component{
    constructor(){
        super()
        this.state={depat:""}

    }
    setDept=(e)=>{this.setState({dept:e.target.value})}
    render(){
        console.log(this.state.dept)
        return(<select onChange={this.setDept}>
            <option value="ece">ece</option>
            <option value="eee">eee</option>
            <option value="cse">cse</option>
             <option value="mec">mec</option>

        </select>)
    }
}
export default Dept