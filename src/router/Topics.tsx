import React, { Component } from 'react'
import { RouteComponentProps, Route, Switch } from 'react-router-dom';
import FirstSub from './FirstSub';
import SecondSub from './SecondSub';

export default class Topics extends Component<RouteComponentProps<{}>, any> {
    render() {
        const { match } = this.props;
        
        const divStyle = { 
            border: "1px solid green", 
            backgroundColor: "lightgray", 
            color: "black"
        };

        return (
            <div style={divStyle}>
                <h1>This is the Topics List</h1>
                <hr/>
                <p>{match.url}</p>
                <Switch>
                    <Route path={match.url + "/firstsub"} component={FirstSub}/>
                    <Route path={match.url + "/secondsub"} component={SecondSub}/>
                </Switch>
            </div>
        )
    }
}
