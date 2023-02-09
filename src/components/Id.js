import { Component } from "react";

class Id extends Component{
    constructor(){
        super()
        this.state={id:""}
        this.arr=[]
        
      
    }

setId=(e)=>{this.setState({id:e.target.value})}

render(){
    console.log()
    return(<input onChange={this.setId} type="text" placeholder="enter the rollno" value={this.state.id}/>)
}
}
export default Id