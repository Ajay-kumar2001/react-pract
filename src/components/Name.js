import { Component } from "react";

class Name extends Component{
    constructor(){
        super()
        this.state={name:""}
        // console.log(this.state
        
    

    }
    setName=(e)=>{ this.setState({name:e.target.value})}
    
    
    render(){
    
        return(<input onChange={this.setName} type="text" placeholder="enter name" value={this.state.name}/>)

    }
}
export default Name