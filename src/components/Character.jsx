import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';
function Character({character, detail}) {
  return (
    <>
      <Link
        to={`/character/${character.id}`}
        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        state={{ detail }}
      >
        <div className="card nes-container mb-4 ">
          <div className="image-container is-dark with-title ">
            <img
              src={character.image}
              alt={character.name}
              className="card-img-top"
            />
          </div>
          <div className="card-body text-center p-regular is-rounded">
            <h5 className="card-title">{character.name}</h5>
            <span>{character.status}</span>
          </div>
          {detail === 0 ? (
            <h2></h2>
          ) : (
            <div className="card-footer text-center p-regular">
              <p className="card-text">
                <strong>Species:</strong> {character.species}
              </p>
              <p className="card-text">
                <strong>
                  Status: {character.status === "Alive" ? "Vivo" : "Muerto"}
                </strong>
              </p>
              <p className="card-text">
                <strong>Origen: {character.origin?.name}</strong>
              </p>
              <p>
                <strong>Episodes: {character.episode?.length}</strong>
              </p>
            </div>
          )}
        </div>
      </Link>
    </>
  );
}

export default Character

Character.propTypes = {
    character: Proptypes.object.isRequired,
    detail: Proptypes.number
}