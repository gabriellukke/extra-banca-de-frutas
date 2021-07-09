import React from "react";
import FruitCard from "../Components/FruitCard";

class MainPage extends React.Component {
  render () {
    const { fruits } = this.props;
    return (
      <div className="container">
        <h1>Cesta de Frutas</h1>
        <div>
        {fruits.map((fruit) => (
          <FruitCard fruit={fruit} />
        ))}
        </div>
      </div>
    )
  }
}

export default MainPage;
