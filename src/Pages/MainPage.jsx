import React from "react";
import FruitCard from "../Components/FruitCard";

class MainPage extends React.Component {
  render () {
    const { fruits } = this.props;
    return (
      <div>
        {fruits.map((fruit) => (
          <FruitCard fruit={fruit} />
        ))}
      </div>
    )
  }
}

export default MainPage;
