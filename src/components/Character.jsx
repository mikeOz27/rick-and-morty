import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

function Character({character}) {
  return (
    <>
      <Link
        to={`/character/${character.id}`}
        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
      >
        <div className="card">
          <div className="image-container nes-container is-dark with-title ">
            <img
              src={character.image}
              alt={character.name}
              className="card-img-top img-thumbnail rounded-pill"
            />
          </div>
          <div className="card-body text-center p-regular nes-container is-rounded">
            <h5 className="card-title">{character.name}</h5>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Character

Character.propTypes = {
    character: Proptypes.object.isRequired
}