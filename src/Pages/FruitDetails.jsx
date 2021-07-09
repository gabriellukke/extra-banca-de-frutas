import React from 'react';
import ListFruit from '../Components/ListFruits';
import FruitCard from '../Components/FruitCard';

class FruitDetails extends React.Component {
  render() {
    const { fruits } = this.props;
    const { match: { params: { id } } } = this.props; 
    console.log(fruits, id)
    
    return (
      <main>
        <section>
            <FruitCard fruit={fruits.find((fruit) => fruit.id === parseInt(id))} details/>
        </section>
        <aside>
          <h3>Outras Frutas</h3>
          <ListFruit fruits={fruits.filter((fruit) => fruit.id !== parseInt(id))}/>
        </aside>
      </main>
    )
  }
}

export default FruitDetails;