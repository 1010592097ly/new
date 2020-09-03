import React, { Component } from 'react'
// import List from './List'
// import Input from "./Input"
import Other from './Other'

export default class Todos extends Component {
    state = {
        list:["a","b","c"]
    }
    //写一个更改自身状态的方法
    add = (str) =>{
        this.setState({
            list:[...this.state.list,str]
        })
    }
    render() {
        // let {list} = this.state //解构出来
        return (
            <div>
                {/* <Input add={this.add}/>
                <List list={list}/> */}
                <Other/>
            </div>
        )
    }
}
