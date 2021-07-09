import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import FruitDetails from './Pages/FruitDetails';

import { fruits } from './data';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
    }

    this.getFruits = this.getFruits.bind(this)
  }

  componentDidMount() {
    this.getFruits();
  }

  getFruits() {
    this.setState({
      fruits,
    })
  }

  render () {
    const { fruits } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <MainPage fruits={fruits} />} />
          <Route path="/details/:id" render={(props) => <FruitDetails {...props} fruits={fruits} />} />
        </Switch>
      </Router>
    )
  }
}

export default App;
