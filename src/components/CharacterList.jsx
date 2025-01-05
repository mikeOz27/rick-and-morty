import { useState, useEffect } from "react";
import Character from "./Character";
import Proptype from "prop-types";
import api from "../services/api";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  function prevPage() {
    console.log("Prev Page");
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function nextPage() {
    console.log("Next Page");
    setPage(page + 1);
  }

  function NavPages(props) {
    return (
      <div>
        <header className="d-flex justify-content-between py-4 align-items-center">
          <button className="nes-btn is-primary p-regular" onClick={prevPage}>
            Anterior {props.page - 1 === 0 ? '' : props.page - 1}
          </button>
          <button className="nes-btn is-primary p-regular" onClick={nextPage}>
            Siguiente {props.page + 1}
          </button>
        </header>
      </div>
    );
  }

  const getCharacter = async () => {
    await api.get(`/character/?page=${page}`)
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getCharacter();
  }, [page]);
  return (
    <div className="container bg-light">
      <NavPages page={page} />
      <div className="row">
        {loading ? (
          <div className="text-center">
            <p className="title press-start-2p-regular">Loading...</p>
          </div>
        ) : (
          characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character character={character} page={page} />
            </div>
          ))
        )}
      </div>
      <NavPages page={page} />
    </div>
  );
}

export default CharacterList;

CharacterList.propTypes = {
  page: Proptype.number,
};
