import React, { Component } from 'react';
import { SystemStyle } from './Style/DefaultTheam';

let style = {
    background: SystemStyle.primary,
    padding: '4px 4px',
    border: 'none',
    borderRadius: 6,
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Bungee, cursive',
    textDecoration: 'none',
    height: 'auto',
    width: 'auto',
    margin: 5
}

export class JRKButton extends Component {
    render() {

        if (this.props.style === 'large') {
            style = { ...style, fontSize: 50 };
        }

        return (
            <button style={style}> {this.props.text} </button>
        );
    }
}

