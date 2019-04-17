import React, { Component } from 'react';
import { SystemStyle } from './Style/DefaultTheam';



export class JRKButton extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        };
    }

    render() {
        let style = {
            background: this.state.hover ? SystemStyle.secondary : SystemStyle.dark ,
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
        };

        if (this.props.style === 'large') {
            style = { ...style, fontSize: 50 };
        }

        return (
            <button     style={style}
                        onMouseEnter={() => { this.setState({ hover: true }); }}
                        onMouseLeave={() => { this.setState({ hover: false }); }}
            >
                {this.props.text}
            </button>
        );
    }
}

