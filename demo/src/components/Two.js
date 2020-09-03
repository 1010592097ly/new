import React, { Component } from 'react'
import Eventhub from "../utils/event-hub"

export default class Two extends Component {
    state = {
        color:"red"
    }
    componentDidMount(){
        Eventhub.on("bianse",color=>{
            this.setState({
                color
            })
        })
    }
    // changeColor = () => {
    //     this.setState({
    //         color:"yellow"
    //     })
    // }
    render() {
        return (
            <div>
                <span style={{color:this.state.color}}>two</span>
            </div>
        )
    }
}
