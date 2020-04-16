import React from 'react';

export default class InnerHeader extends React.Component<any, any> {
    sum = (op1: number, op2: number): number => op1 + op2;
    
    render() {
        return(
            <h2>E questo, 
                {this.props.name} {this.props.lastName}, 
                è il primo Class Component (4 + 2 = { this.sum( 4, 2 ) })
            </h2>
        );
    }
}