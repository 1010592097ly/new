import React, { Component } from 'react'

export default class Input extends Component {
    handelKeyUp = (e) => {
        if(e.keyCode === 13){
            this.props.add(e.  target.value)
        }
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.handelKeyUp}/>
            </div>
        )
    }
}
