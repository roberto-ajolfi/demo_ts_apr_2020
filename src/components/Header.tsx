import React from 'react';

interface HeaderProps {
    title: string;
}

// FUNCTION COMPONENT

const Header = (props: HeaderProps) => {
    return(
        <h1>=== Welcome to {props.title} ===</h1>
    );
}

export default Header;