import React from 'react';
import GlossaryTerm from '../models/GlossaryTerm';

interface GlossaryProps {
    terms: GlossaryTerm[];
}

export default class Glossary extends React.Component<GlossaryProps, {}> {
    render() {
        const terms = this.props.terms;

        const listOfTerms = terms.map(
            (t: GlossaryTerm, index: number) => (
                <React.Fragment key={index}>
                    <dt style={{ color: "salmon" }}>{t.term}</dt>
                    <dd>{t.definition}</dd>
                </React.Fragment> 
            )
        );

        const dlStyle = { border:"5px double darkgreen", padding: "5px", backgroundColor: "green" }; 

        return(
            <dl style={dlStyle}>
                {listOfTerms}
            </dl>
        );
    }
}