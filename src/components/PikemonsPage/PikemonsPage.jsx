import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import s from './PikemonsPage.module.css'

const PikemonsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pikemon, setPikemon] = useState(null);

  const pikemons = useSelector((state) => state.pikemon.pikemons);

  useEffect(() => {
    const selectedPikemons = pikemons.find((p) => p.id === parseInt(id));
    setPikemon(selectedPikemons);
  }, [id]);

  if (!pikemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={s.pikemonPage}>
        <h1>{pikemon.name}</h1>
        <img src={pikemon.sprite} alt={pikemon.name} />

        <h2>Types:</h2>
        <ul>
          {pikemon.types.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>

        <button onClick={() => navigate("/")}>Back to Pokemons List</button>
      </div>
    </div>
  );
};

export default PikemonsPage;
