import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import {JRKButton } from './Button';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
        <div>
            <NavMenu />
            <div>
                {this.props.children}
            </div>
        </div>

    );
  }
}
