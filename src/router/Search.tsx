import React, { Component } from 'react'
import queryString from 'query-string'
import { RouteComponentProps } from 'react-router-dom'

export default class Search extends Component<RouteComponentProps<{id: string}>, any> {
    render() {
        const values = queryString.parse(this.props.location.search);

        return (
            <div>
                {this.props.match.params.id}<br/>
                {JSON.stringify(this.props.match)}<br/>
                {JSON.stringify(this.props.location)}<br/>
                {this.props.location.search}<br/>
                {values.name}<br/>
                {values.age}<br/>
            </div>
        )
    }
}
