import React from 'react';
import FruitCard from './FruitCard';

class ListFruit extends React.Component {
  render(){
    const {fruits} = this.props;
    return (
      <ul>
        {fruits.map((fruit) => 
          <li>
            <FruitCard fruit={fruit} />
          </li>
        )}
      </ul>
    )
  }
}

export default ListFruit;