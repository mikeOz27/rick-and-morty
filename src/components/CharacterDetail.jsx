import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import api from "../services/api";

function CharacterDetail() {
  const { id } = useParams();
  const [characterDetails, setCharacterDetails] = useState([]);

  const fetchCharacterDetails = async () => {
    await api
      .get(`/character/${id}`)
      .then((response) => {
        setCharacterDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCharacterDetails();
  });

  return (
    <div className="text-center p-5">
      <h3>{characterDetails.name}</h3>
      <img
        src={characterDetails.image}
        alt={characterDetails.name}
        className="img-fluid rounded"
      />
      <p>{characterDetails.gender}</p>
      <p>{characterDetails.status}</p>
      <p>{characterDetails.species}</p>
      {/* <p>{characterDetails.origin.name}</p> */}
      <div>
        {/* <p>{characterDetails.location.name}</p> */}
        <NavLink to="/">Volver</NavLink>
      </div>
    </div>
  );
}

export default CharacterDetail;

CharacterDetail.propTypes = {
  character: Proptypes.object.isRequired,
};
