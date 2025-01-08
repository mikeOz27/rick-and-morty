import { useState, useEffect } from "react";
import Character from "./Character";
import Proptype from "prop-types";
import { NavPages } from "./Pagination";
import { getCharacters } from "../services/api";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [detail, setDetail] = useState(1);
  const [filter, setFilter] = useState("");

  const getCharacter = async () => {
    const selectStatus = document.getElementById("default_select").value;
    await getCharacters(page, filter, selectStatus, setCharacters, setPages, setLoading);
  };

  //FUNCION BUSCAR
  const search = async (event) => {
    const selectStatus = document.getElementById("default_select").value;
    if (event.keyCode === 13 || event.type === "change") {
      setTimeout(() => {
        getCharacters(page, filter, selectStatus, setCharacters, setPages, setLoading);
      }, 100);
    } else if (filter.trim() === "") {
      getCharacter(); // Restaura la lista original si no hay filtro
    }
  };

  useEffect(() => {
    getCharacter();
    setDetail(0);
  }, [page]);

  return (
    <div className="container bg-dark text-primary ">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search Character"
            onKeyUpCapture={search}
            value={filter}
            className="nes-input is-dark"
          />
        </div>
        <div className="col-md-6">
          <div className="nes-select is-dark">
            <select
              required
              id="default_select"
              onChange={search}
              defaultValue=""
            >
              <option value="" disabled>
                Selection status
              </option>
              <option value="">All</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        {loading ? (
          <div className="text-center">
            <p className="title press-start-2p-regular">Loading...</p>
          </div>
        ) : (
          <>
            <NavPages
              page={page}
              setPage={setPage}
              pages={pages}
              getCharacter={getCharacter}
              setCharacters={setCharacters}
              setFilter={setFilter}
            />
            {characters.map((character) => (
              <div
                className="col-md-4 animate__animated animate__fadeIn"
                key={character.id}
              >
                <Character character={character} page={page} detail={detail} />
              </div>
            ))}
            <NavPages
              page={page}
              setPage={setPage}
              pages={pages}
              getCharacter={getCharacter}
              setCharacters={setCharacters}
              setFilter={setFilter}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CharacterList;

CharacterList.propTypes = {
  page: Proptype.number,
};
