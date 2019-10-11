import React from "react";
import TextInput from "./TextInput";
import HeightFilter from "./HeightFilter";
import WeaknessFilter from "./WeaknessFilter";
import { Link } from "react-router-dom";

class FilteredResults extends React.Component {
  constructor() {
    super();
    this.handleQueryUpdate = this.handleQueryUpdate.bind(this);
    this.handleHeightUpdate = this.handleHeightUpdate.bind(this);
    this.handleWeaknessUpdate = this.handleWeaknessUpdate.bind(this);

    this.state = {
      query: "",
      pokemons: [],
      height: 4,
      weakness: ""
    };
  }

  handleQueryUpdate(query) {
    this.setState({ query });
  }

  handleHeightUpdate(height) {
    this.setState({ height });
  }

  handleWeaknessUpdate(weakness) {
    this.setState({ weakness });
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then(response => response.json())
      .then(resData => {
        console.log(JSON.stringify(resData));
        this.setState({ pokemons: resData.pokemon });
      });
  }

  render() {
    // filtering system
    let { pokemons, weakness, height, query } = this.state;
    let filteredPokemons = [];
    pokemons.map(pokemon => {
      for (let i = 0; i < pokemon.type.length; i++) {
        if (
          parseFloat(pokemon.height) < height &&
          (pokemon.weaknesses.includes(weakness) || weakness === "") &&
          !filteredPokemons.map(pokemon => pokemon.id).includes(pokemon.id) &&
          (pokemon.type[i].toLowerCase().includes(query.toLocaleLowerCase()) ||
            pokemon.name.toLowerCase().includes(query.toLocaleLowerCase()))
        ) {
          filteredPokemons.push(pokemon);
        }
      }
      return pokemon;
    });

    return (
      <div className="FiltersResults__container">
        <div className="container">
          <TextInput onQueryUpdate={this.handleQueryUpdate} />
          <p>
            {" "}
            Selected height <span className="selectedHeight">{height}</span> (m)
            and weakness{" "}
            <span
              className={weakness.toLocaleLowerCase() + " type optionWeakness"}
            >
              {weakness === "" ? "All" : weakness}
            </span>{" "}
          </p>
          <HeightFilter
            onHeightUpdate={this.handleHeightUpdate}
            pokemonsList={this.state.pokemons}
          />
          <WeaknessFilter
            onWeaknessUpdate={this.handleWeaknessUpdate}
            pokemonsList={this.state.pokemons}
          />
        </div>

        <div className="FilteredPokemons__container container">
          <div className="row justify-content-center">
            {filteredPokemons.length > 0 &&
              filteredPokemons.map((pokeRecord, i) => {
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
                          className={
                            type.toLocaleLowerCase() + " typeResults type"
                          }
                          key={type + i}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  </Link>
                );
              })}
            {query === "" &&
              weakness === "" &&
              height.length === 4 &&
              pokemons.map((pokeRecord, i) => {
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
                          className={
                            type.toLocaleLowerCase() + " typeResults type"
                          }
                          key={type + i}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  </Link>
                );
              })}
            {((filteredPokemons.length === 0 &&
              (query !== "" || weakness !== "")) ||
              height === 0) && <div>No records found</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default FilteredResults;
