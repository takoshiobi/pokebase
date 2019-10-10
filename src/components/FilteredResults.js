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
        
        this.state = { 
                       query: "",
                       pokemons: [],
                       height: [],
                       weakness: ""
                     };
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
        // filtering system
        let {pokemons, weakness, height, query} = this.state;
        let filteredPokemons = [];
        pokemons.map(pokemon => {
            for (let i=0; i<pokemon.type.length; i++) {
                if (height[0] < parseFloat(pokemon.height) < height[1] &&
                    pokemon.weaknesses.includes(weakness) &&
                    (pokemon.type[i].toLowerCase().includes(query.toLocaleLowerCase()) || pokemon.name.toLowerCase().includes(query.toLocaleLowerCase()))
                ) {
                    filteredPokemons.push(pokemon);
                }
            }    
        });
        
        return (
            <div className="FiltersResults__container">
                <TextInput onQueryUpdate={this.handleQueryUpdate}/>
                <HeightFilter onHeightUpdate={this.handleHeightUpdate}/>
                <WeaknessFilter onWeaknessUpdate={this.handleWeaknessUpdate} pokemonsList={this.state.pokemons} />
                <div className="FilteredPokemons__container">
                { 
                    filteredPokemons.map((pokeRecord,i) => {
                        return  <div className="record" key={pokeRecord.id+i}> 
                                    <div> {pokeRecord.name} </div>
                                    <div className="Type__container"> 
                                    {
                                        pokeRecord.type.map((type, i) => <div className={type.toLocaleLowerCase() + " type"} key={type+i}>{type}</div>)
                                    }  
                                    </div>
                                    <div className="height"> {pokeRecord.height} </div>
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