import React, { Component } from 'react'
import axios from "axios"
export default class Todolist extends Component {
    state={
        list:[],
        username:'',
        age:''
    }
    //在这个钩子函数里面进行异步操作
    componentDidMount(){
        this.find()
    }
    find =() => {
        axios.get("http://localhost:4000/list").then(res => {
            console.log(res.data)
            //更改组件自身的状态
            this.setState({
                list:res.data
            })
        })
    }
    //添加按钮
    add = () => {
        // console.log(this.state.username,this.state.age)
        axios.post("http://localhost:4000/list",{
            name:this.state.username,
            age:this.state.age
        }).then(res => {
            console.log("数据添加成功")
            this.find()
        })
        
    }

    input = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render() {
        let {username,list,age} = this.state 
        return (
            <div>
                <input id='username' onChange={this.input} value={username} type="text" placeholder="请输入用户名"/>
                <input id='age' onChange={this.input} value={age} type="text" placeholder="请输入年龄"/>
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        list.map((item,index) => {
                        return <li key={index}>
                            {item.name} 
                            {item.age}
                            <button onClick={this.remove(this,index)}>删除</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
