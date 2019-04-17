import React, { Component } from 'react';
import { SystemStyle } from './Style/DefaultTheam';
import { NavLink } from './NavLink';

export class NavMenu extends Component {
    displayName = NavMenu.name;

    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        let style = {
            title: {
                color: SystemStyle.third,
                fontSize: 30,
                paddingLeft: 20,
                margin: 0,
                justifyContent: this.state.width > 600 ? 'left' : 'center',
                alignItems: 'center',
                display: 'grid'
                //gridArea: 'Title'
            },
            container: {
                backgroundColor: SystemStyle.primary,
                display: 'grid',
                gridTemplateColumns: this.state.width > 600 ? '5fr 1fr 1fr 1fr' : '1fr',
                gridTemplateRows: this.state.width > 600 ?'auto': '2fr 1fr 1fr 1fr',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 500ms ease-in-out'
                //gridTemplateRows: 'auto',
                //gridTemplateAreas: "'Title Link1 Link2 Link3'"
            }
        };

        console.log(this.state.width);

      return (
          <div style={style.container}>
              <h1 style={style.title}>HMB</h1>
              <NavLink href="/" title="Home" />
              <NavLink href="/counter" title="Counter" />
              <NavLink href="/FetchData" title="Data" />
          </div>
    );
  }
}
