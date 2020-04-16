import React, { Component } from 'react'

export default class NoMatch extends Component {
    render() {
        const divStyle = { 
            border: "4px dotted crimson", 
            backgroundColor: "red", 
            color: "white"
        };

        return (
            <div style={divStyle}>
                <h1>Error 404 (circa ...) - No matching view available.</h1>
            </div>
        )
    }
}
