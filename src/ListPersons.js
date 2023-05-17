import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CHARACTERS_QUERY = gql`
  {
    characters {
      results {
        id
        image
        name
        status
        species
      }
    }
  }
`;

const CharactersList = () => {
  const { loading, error, data } = useQuery(CHARACTERS_QUERY);
  if (loading) return <strong>Carregando!</strong>;
  if (error) return <strong>Erro!</strong>;

  return data.characters.results.map((character) => (
    <div id="character" key={character.id}>
      <a href={`/characters/${character.id}`}>
        <div className="photo">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="wrap">
          <h3 className="name">{character.name}</h3>
          <div className="type">
            {character.status} - {character.species}
          </div>
        </div>
      </a>
    </div>
  ));
};

export default CharactersList;
