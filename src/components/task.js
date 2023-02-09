import { Component } from "react";
import Add from "./Add";
import Table from "./table"

class Task extends Component{
    constructor(){
        super()
        this.state={name:"",id:"",dept:"",marks:"",addr:""}

    }
    setName=(e)=>{ this.setState({name:e.target.value})}
    setId=(e)=>{this.setState({id:e.target.value})}
    setDept=(e)=>{this.setState({dept:e.target.value})}
    setMarks=(e)=>{this.setState({marks:e.target.value})}
    render(){
        
        return(<div>
            
            <form>
                <input onChange={this.setName} type="text" placeholder="enter name" value={this.state.name}/>
                <input onChange={this.setId} type="text" placeholder="enter the rollno" value={this.state.id}/>
                <select onChange={this.setDept}>
                        <option value="ece">ece</option>
                        <option value="eee">eee</option>
                        <option value="cse">cse</option>
                        <option value="mec">mec</option>
                </select>
                <input onChange={this.setMarks} type="text" placeholder="enter Marks" value={this.state.marks}/>
            
            </form>
            <Add/>
            <Table info={this.state}/>
            </div>
        )
        
    }

}
export default Task