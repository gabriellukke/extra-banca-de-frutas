import React from 'react';
import { Link } from 'react-router-dom';

class FruitCard extends React.Component {
  render() {
    console.log(this.props)
    const { fruit: { id, name, photo, calories, protein, carbohydrates, fiber },
      details } = this.props;

    return (
      <>
        {details ? <>
          <div>
            <img src={photo} alt="fruit" />
          </div>
          <div>
            <div>Nome: {name}</div>
            <div>Calorias: {calories}</div>
            <div>Proteínas: {protein}</div>
            <div>Carboidratos: {carbohydrates}</div>
            <div>Fibras: {fiber}</div>
          </div>
        </> :
          <Link to={`/details/${id}`}>
            <div>
              <img src={photo} alt="fruit" />
            </div>
            <div>
              <span>{name}</span>
            </div>
          </Link>
        }
      </>
    )
  }
}

export default FruitCard;