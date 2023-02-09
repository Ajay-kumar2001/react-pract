import {Component} from "react"
class StateEX2 extends Component{
    constructor(){
        super()
        this.state={time:new Date()}

    }
    render(){
    
        setInterval(()=>{this.setState({time:new Date()})},1000)
        return(<div>{this.state.time.toTimeString()}</div>)
    }
}
export default StateEX2