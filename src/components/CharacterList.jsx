import { useEffect, useState } from "react";
import Character from "./Character";
import Proptype from "prop-types";
import { Navigate } from "./Navigate";
import { useSearch } from "../hooks/useSearch";

function CharacterList() {
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [detail, setDetail] = useState(1);

  const { characters, loading, page, setPage, pages, search } = useSearch();

  const handleSearch = (event) => {
    if (event.keyCode === 13 || event.type === "change") {
      search(filter, page, status, gender);
    }
  };
  

  useEffect(() => {
    search(filter, page, status, gender);
    setDetail(0);
  }, [page, gender, status]);

  return (
    <div className="container bg-dark text-primary">
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search Character"
            onKeyUpCapture={handleSearch}
            value={filter}
            className="nes-input is-dark"
          />
        </div>
        <div className="col-md-4">
          <div className="nes-select is-dark">
            <select
              required
              id="status"
              onChange={(e) => {
                setStatus(e.target.value);
                handleSearch(e);
              }}
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
        <div className="col-md-4">
          <div className="nes-select is-dark">
            <select
              required
              id="gender"
              onChange={(e) => {
                setGender(e.target.value);
                handleSearch(e);
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Selection gender
              </option>
              <option value="">All</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="genderless">Genderless</option>
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
          <div className="row">
            {characters.length > 0 ? (
              <>
                <Navigate page={page} setPage={setPage} pages={pages} />
                {characters.map((character) => (
                  <div
                    className="col-md-4 animate__animated animate__fadeIn"
                    key={character.id}
                  >
                    <Character
                      character={character}
                      page={page}
                      detail={detail}
                    />
                  </div>
                ))}
                <Navigate page={page} setPage={setPage} pages={pages} />
              </>
            ) : (
              <div
                className="text-center mb-4 p-20"
                style={{ margin: "20% auto" }}
              >
                <p className="title press-start-2p-regular">No results found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterList;

CharacterList.propTypes = {
  page: Proptype.number,
};
