import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

      fetch('https://localhost:44385/api/SampleData')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      });
  }

  static renderForecastsTable(forecasts) {
      return (
          <div>
              <Button className="btn-secondary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="info">Info</Button>
              <Button variant="light">Light</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="link">Link</Button>

              <table className='table' fluid>
                  <thead>
                      <tr>
                          <th>Date</th>
                          <th>Temp. (C)</th>
                          <th>Temp. (F)</th>
                          <th>Summary</th>
                      </tr>
                  </thead>
                  <tbody>
                      {forecasts.map(forecast =>
                          <tr key={forecast.dateFormatted}>
                              <td>{forecast.dateFormatted}</td>
                              <td>{forecast.temperatureC}</td>
                              <td>{forecast.temperatureF}</td>
                              <td>{forecast.summary}</td>
                          </tr>
                      )}
                  </tbody>
              </table>
          </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
