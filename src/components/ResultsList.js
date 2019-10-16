import React from "react";
import { Link } from "react-router-dom";

function ResultsList(props) {
  return (
    <div className="row justify-content-center">
      {props.pokemons.map((pokeRecord, i) => {
        return (
          <Link
            to={{
              pathname: `/${pokeRecord.name}`,
              state: {
                name: pokeRecord.name,
                img: pokeRecord.img,
                weaknesses: pokeRecord.weaknesses,
                height: pokeRecord.height,
                egg: pokeRecord.egg,
                type: pokeRecord.type
              }
            }}
            className="record"
            key={pokeRecord.id + i}
          >
            <img src={pokeRecord.img} alt="pokemon_img" />
            <div>{pokeRecord.name}</div>
            <div className="Type__container row justify-content-center">
              {pokeRecord.type.map((type, i) => (
                <div
                  className={type.toLocaleLowerCase() + " typeResults type"}
                  key={type + i}
                >
                  {type}
                </div>
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ResultsList;
