
import { Component } from 'react';
import './App.css';
import Name from './components/Name';
import StateEx from './components/stateEx';
import StateEX2 from './components/StateEx2';
import Id from './components/Id';
import Dept from './components/Dept';
import Marks from './components/Marks';
import Task from './components/task';
import Body from './Atm/Body';
import Table from './components/table';


class  App extends Component {
  constructor(){
    super()
    this.state={name:"",id:"",dept:"",marks:"",addr:""}
  }
  render(){

  return (

  <div> <StateEx/>
  <StateEX2/>
  <Name />
  <Id/>
  <Dept/>
  <Marks/>
  <Task/>
  <Body/>
  <table border="2px">
  <Table info={this.state}/>
  </table>
  </div>  );
  }

}

export default App;
