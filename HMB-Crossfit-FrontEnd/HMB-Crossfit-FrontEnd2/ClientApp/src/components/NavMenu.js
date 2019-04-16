import React, { Component } from 'react';
import { SystemStyle } from './Style/DefaultTheam';
import { NavLink } from './NavLink';

export class NavMenu extends Component {
    displayName = NavMenu.name;

    render() {
        let style = {
            title: {
                color: 'white',
                fontSize: 32,
                padding: 0,
                margin: 0,
                //gridArea: 'Title'
            },
            container: {
                backgroundColor: SystemStyle.primary,
                display: 'grid',
                gridTemplateColumns: '5fr 1fr 1fr 1fr',
                //gridTemplateRows: 'auto',
                //gridTemplateAreas: "'Title Link1 Link2 Link3'"
            }
        };
      return (
          <div style={style.container}>
              <h1 style={style.title}>HMB Crossfit</h1>
              <NavLink href="/" title="Home" />
              <NavLink href="/counter" title="Counter" />
              <NavLink href="/FetchData" title="Data" />
          </div>
    );
  }
}
