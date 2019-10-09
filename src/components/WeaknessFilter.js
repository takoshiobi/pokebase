import React from 'react';


class WeaknessFilter extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onWeaknessUpdate(event.target.innerHTML);
    }

    render() {
        var res = [];
        this.props.pokemonsList.map(pokeRecord => {
            for (let i=0; i<pokeRecord.weaknesses.length; i++) {
                if (!res.includes(pokeRecord.weaknesses[i])) {
                    res.push(pokeRecord.weaknesses[i]);
                }
            }
        })
        return (
            <div className="WeaknessFilter__container">
                {
                   res.map((record,i) => {
                       return <div key={i} onClick={this.handleClick}>
                            {record}
                       </div>
                   })
                }
            </div>
        )
    }
}

export default WeaknessFilter;