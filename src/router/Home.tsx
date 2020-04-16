import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        const divStyle = { 
            border: "1px solid red", 
            backgroundColor: "lightgray", 
            color: "darkgreen"
        };

        return (
            <div style={divStyle}>
                <h1>Welcome to Home!</h1>
            </div>
        )
    }
}
