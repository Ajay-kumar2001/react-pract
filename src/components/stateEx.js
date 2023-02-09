import {Component} from "react"
class StateEx extends Component{
    constructor(){
        super()
        this.state={name:"ajay"}
    }
    render(){
        // this.state.name="sandeep"
        return(<div><h1>{this.state.name}</h1></div>)
    }
}
export default StateEx