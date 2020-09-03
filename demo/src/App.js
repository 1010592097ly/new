import React,{Component} from 'react';
import Todolist from './components/Todolist';
// import {a,b} from "./a"
// import * as A from "./a"
// import A,{c as cccc} from "./a"  //as  起别名
// import Form from "./Form"
// import Todos from './components/Todos';
//定义了react得类组件
class App extends Component{
  render(){
    // console.log(A.a)
    // console.log(A.b)
    // console.log(A,cccc)
      return(
        <div>
          {/* <Form/> */}
          {/* <Todos/> */}
          <Todolist/>
        </div>
      )
  }
}

export default App;
