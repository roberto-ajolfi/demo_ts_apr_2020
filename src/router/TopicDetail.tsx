import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface TopicRouteData {
    id: string;
    pageSize: string;
}

export default class TopicDetail extends Component<RouteComponentProps<TopicRouteData>, any> {
    render() {
        const { match } = this.props;
        
        return (
            <div>
                <h1>Topic #{match.params.id} - Details</h1>
                <h3>Size: {match.params.pageSize}</h3>
                <h3>details, details, details ...</h3>
            </div>
        )
    }
}
