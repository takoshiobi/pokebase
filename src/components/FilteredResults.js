import React from 'react';
import TextInput from './TextInput';
import HeightFilter from './HeightFilter';
import WeaknessFilter from './WeaknessFilter';

class FilteredResults extends React.Component {
    constructor() {
        super();
        this.handleQueryUpdate = this.handleQueryUpdate.bind(this);
        this.handleHeightUpdate = this.handleHeightUpdate.bind(this);
        this.handleWeaknessUpdate = this.handleWeaknessUpdate.bind(this);
        this.state = {query: "", pokemons: [], res: [], height: [], weakness: ""};
    }

    handleQueryUpdate(query) {
        this.setState({query})
    }

    handleHeightUpdate(height) {
        this.setState({height})
    }

    handleWeaknessUpdate(weakness) {
        this.setState({weakness})
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then(response =>  response.json())
        .then(resData => {
           console.log(JSON.stringify(resData))
           this.setState({ pokemons: resData.pokemon });
        })
    }

    render () {
        let pokemonsF = this.state.pokemons.filter(pokemon => {
            for (let i=0; i<pokemon.type.length; i++) {
                if (pokemon.type[i].toLowerCase().includes(this.state.query.toLocaleLowerCase()) || pokemon.name.toLowerCase().includes(this.state.query.toLocaleLowerCase())) {
                    return pokemon;
                }
            }
        });
        return (
            <div className="FiltersContainer__container">
                <TextInput onQueryUpdate={this.handleQueryUpdate}/>
                <HeightFilter onHeightUpdate={this.handleHeightUpdate}/>
                <WeaknessFilter onWeaknessUpdate={this.handleWeaknessUpdate} pokemonsList={this.state.pokemons} />
                <div>
                { 
                    pokemonsF.map((pokeRecord) => {
                        return <div className="record" key={pokeRecord.id}> 
                            <div> {pokeRecord.name} </div>
                            <div className="type"> {
                                pokeRecord.type.map((type, i) => <div key={type+i}>{type}</div>)
                            } </div>
                            <div className="height">
                                {pokeRecord.height}
                            </div>
                            <div className="weaknesses">
                                {
                                    pokeRecord.weaknesses.map((weakness, i) => <div key={weakness+i}>{weakness}</div>)
                                }
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
        )
    }

}

export default FilteredResults;