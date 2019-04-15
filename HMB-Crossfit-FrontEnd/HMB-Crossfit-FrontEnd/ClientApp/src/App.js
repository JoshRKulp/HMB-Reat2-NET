import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonAppBar } from './components/ButtonAppBar';

export default class App extends Component {

  render() {
    return (
        <ButtonAppBar />
    );
  }
}

//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
//<Layout>
//    <Route exact path='/' component={Home} />
//    <Route path='/counter' component={Counter} />
//    <Route path='/fetchdata' component={FetchData} />
//</Layout>