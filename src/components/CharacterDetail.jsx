import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import api from "../services/api";
import Character from "./Character";

function CharacterDetail() {
  const { id } = useParams();
  const [characterDetails, setCharacterDetails] = useState({});

  const fetchCharacterDetails = async () => {
    await api
      .get(`/character/${id}`)
      .then((response) => {
        const data = response.data;
        setCharacterDetails(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, [id]);

  return (
    <div className="container" style={{ width: "25%" }}>
      <Character character={characterDetails} detail={1} />
      <div className="text-center">
        {/* <p>{characterDetails.location.name}</p> */}
        <NavLink to="/" className="nes-btn is-error p-regular">
          Volver
        </NavLink>
      </div>
    </div>
  );
}

export default CharacterDetail;

CharacterDetail.propTypes = {
  character: Proptypes.object,
  detail: Proptypes.number,
};
