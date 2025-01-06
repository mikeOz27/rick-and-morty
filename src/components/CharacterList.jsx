import { useState, useEffect } from "react";
import Character from "./Character";
import Proptype from "prop-types";
import api from "../services/api";
import { NavPages } from "./Pagination";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [detail, setDetail] = useState(1);

  const getCharacter = async () => {
    await api.get(`/character/?page=${page}`)
      .then((response) => {
        const data = response.data
        setCharacters(data.results);
        setPages(data.info.pages);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getCharacter();
    setDetail(0);
  }, [page]);

  return (
    <div className="container bg-dark text-primary ">
      <div className="row">
        {loading ? (
          <div className="text-center">
            <p className="title press-start-2p-regular">Loading...</p>
          </div>
        ) : (
          <>
           <NavPages page={page} setPage={setPage} pages={pages} />
           {characters.map((character) => (
             <div
               className="col-md-4 animate__animated animate__bounceInUp"
               key={character.id}
             >
               <Character character={character} page={page} detail={detail} />
             </div>
           ))}
            <NavPages page={page} setPage={setPage} pages={pages} />
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
