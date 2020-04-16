import React, { Component } from 'react'

export default class About extends Component {
    render() {
        const divStyle = { 
            border: "1px solid white", 
            backgroundColor: "darkgray", 
            color: "red"
        };

        return (
            <div style={divStyle}>
                <h1>About this app ...</h1>
            </div>
        )
    }
}
