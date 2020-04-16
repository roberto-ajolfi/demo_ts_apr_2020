import React from 'react';

export default class NewLifecycleComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { company: 'iCubed' };

    }

    toggleCompany = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault();

        this.setState(
            { company: (this.state.company === 'iCubed' ? 'Microsoft' : 'iCubed') }
        );
    };

    render() {
        const boxStyle = { border: "5px double green", padding: "10px", margin: "5px" };

        return(
            <div style={boxStyle}>
                <h1>New-style Lifecycle Component</h1>
                <h2>{this.props.name} from {this.state.company}</h2>
                <button onClick={this.toggleCompany}>Toggle Company</button>
            </div>
        );
    }

    componentDidMount() {
        console.log('[componentDidMount] component è stato agganciato.');
    }

    componentWillUnmount() {
        console.log('[componentWillUnmount] component verrà sganciato.');
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log('currentProps => ' + JSON.stringify(this.props));
        console.log('nextProps => ' + JSON.stringify(nextProps));

        console.log('currentState => ' + JSON.stringify(this.state));
        console.log('nextState => ' + JSON.stringify(nextState));

        return true;
    }

    componentDidUpdate() {
        console.log('[componentDidUpdate] component è stato aggiornato.');
    }

    static getDerivedStateFromProps(nextProps: any){
        console.log('[getDerivedStateFromProps] nextProps => ' + JSON.stringify(nextProps));

        return null;
    }

    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        console.log('[getSnapshotBeforeUpdate] nextProps => ' + JSON.stringify(prevProps));

        console.log('[getSnapshotBeforeUpdate] nextState => ' + JSON.stringify(prevState));

        return null;
    }
}