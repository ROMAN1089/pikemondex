import React, {
  useCallback,  // optional
  useEffect,
  useMemo,  // optional
  useState,
} from "react";
import axios from "axios";
import PikemonFilter from "./components/PikemonFIlter/PikemonFilter";
import PikemonList from "./components/PikemonList/PikemonList";
import ThemeSwitch from "./components/Headers/ThemeSwitch";
import "./global.css";

const LIMIT = 20;

const App = () => {
  let offset = 0;
  
  const [pikemons, setPikemons] = useState([]);

  // useState(
  //   {
  //     name: 'asd',
  //     setFilter
  //   }
  // )

  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");


  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadPikemons = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`
      );
      const result = response.data.results;

      const detailePikemons = await Promise.all(
        result.map(async (pikemon) => {
          const firstResponse = await axios(pikemon.url);
          const firstData = firstResponse.data;

          const secondResponse = await axios(
            `https://pokeapi.co/api/v2/pokemon/${firstData.id}/`
          );
          const secondData = secondResponse.data;

          return {
            id: secondData.id,
            name: secondData.name,
            types: secondData.types.map((t) => t.type.name),
            sprite: secondData.sprites.front_default,
          };
        })
      );

      setPikemons((prev) => [...prev, ...detailePikemons]);
      offset += LIMIT;
      setHasMore(response.data.next !== null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPikemons();
  }, []);

// delete useCallback, useMemo, useEffect -> data

  const handleFilter = useCallback((name, type) => {
    setNameFilter(name);
    setTypeFilter(type);
  }, []);

  const filteredPikemons = useMemo(() => {
    return pikemons.filter((pokemon) => {
      const matchesName = pokemon.name
        .toLowerCase()
        .includes(nameFilter.toLowerCase());
      const matchesType =
        typeFilter === "all" || pokemon.types.includes(typeFilter);
      return matchesName && matchesType;
    });
  }, [pikemons, nameFilter, typeFilter]);

  return (
    
    <div className={`container`}>
      <ThemeSwitch />
      <h1>Pokedex</h1>
      <PikemonFilter onFilter={handleFilter} />
      <PikemonList
        pikemons={filteredPikemons}
        loadMore={loadPikemons}
        hasMore={hasMore}
        loading={loading}
      />
    </div>
  );
};

export default App;
