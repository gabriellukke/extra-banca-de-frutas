import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: []
    }
  }

  render () {
    return (
      <div>Banca de Frutas</div>
    )
  }
}

export default App;
