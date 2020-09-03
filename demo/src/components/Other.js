import React, { Component } from 'react'
import One from "./One"
import Two from "./Two"
export default class Other extends Component {
    changeColor = () =>{
        //调用two的方法，通过ref链给two做标记
        this.two.changeColor()
    }
    render() {
        return (
            <div>
                <One changeColor={this.changeColor}/>
                <Two ref={el => this.two = el}/>
            </div>
        )
    }
}
