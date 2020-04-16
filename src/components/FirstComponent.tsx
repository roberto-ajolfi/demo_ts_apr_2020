import React from 'react'
import InnerHeader from './InnerHeader';

interface FirstComponentProps {
    name: string;
    onCommit: (message: string) => void;
}

// CLASS COMPONENT 
export default class FirstComponent extends React.Component<FirstComponentProps, any> {
    lastName: string = 'Ajolfi';

    handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        this.props.onCommit("Dal Figlio al Padre!");
    }

    render() {
        //const name = 'Roberto';

        return(
            <div>
                <InnerHeader name={this.props.name} lastName={this.lastName}/>
                <button onClick={this.handleClick}>Commit data</button>
            </div> 
        );
    }
}