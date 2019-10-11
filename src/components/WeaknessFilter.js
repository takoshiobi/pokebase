import React from "react";

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
      for (let i = 0; i < pokeRecord.weaknesses.length; i++) {
        if (!res.includes(pokeRecord.weaknesses[i])) {
          res.push(pokeRecord.weaknesses[i]);
        }
      }
      return pokeRecord;
    });
    return (
      <div className="WeaknessFilter__container container">
        <div className="row justify-content-center">
          {res.map((record, i) => {
            return (
              <div
                key={i + record}
                className={record.toLowerCase() + " typeFilter type"}
                onClick={this.handleClick}
              >
                {record}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WeaknessFilter;
