import React, { Component } from 'react';
import { SystemStyle } from './Style/DefaultTheam';

export class NavLink extends Component {

    constructor() {
        super();
        this.state = {
            hover: false
        };
    }

    render() {
        let style = {
            links: {
                textDecoration: 'none',
                color: this.state.hover ? SystemStyle.third : SystemStyle.primary ,
                fontSize: 30
            },
            linksWrap: {
                backgroundColor: this.state.hover ? SystemStyle.primary : SystemStyle.third,
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'background-color 500ms ease-in-out'
            }

        };
        return (


            <div style={style.container}>
                <div style={style.linksWrap}>
                    <a style={style.links}
                        href={this.props.href}
                        onMouseEnter={() => { this.setState({ hover: true }); }}
                        onMouseLeave={() => { this.setState({ hover: false }); }}
                    >
                        {this.props.title}
                    </a>
                </div>
            </div>


        );
    }
}
