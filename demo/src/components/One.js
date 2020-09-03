import React, { Component } from 'react'
import Eventhub from "../utils/event-hub"
export default class One extends Component {
    handerClick = () => {
        //需要订阅
        Eventhub.trigger("bianse",this.color16())
    }
    color16 = ()=>{
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
        return color;
    }
    render() {
        return (
            <div>
                {/* <button onClick={() => {this.props.changeColor()}}>点他</button> */}
                <button onClick={this.handerClick}>改变颜色</button>
            </div>
        )
    }
}
