import React from "react";
import { Link } from "react-router-dom";

class PokemonDescription extends React.Component {
  render() {
    return (
      <div className="container Description__container">
        <div className="row">
          <div className="col-12 col-md-6 descriptionImg">
            <img src={this.props.location.state.img} alt="poke_img" />
          </div>
          <div className="col-12 col-md-6 description">
            <div className="name">{this.props.location.state.name}</div>
            <div className="Type__container row">
              {this.props.location.state.type.map((type, i) => (
                <div className="descriptionType type" key={type + i}>
                  {type}
                </div>
              ))}
            </div>
            <div>
              Height:{" "}
              <span className="height">{this.props.location.state.height}</span>
            </div>
            <div className="weaknesses row">
              Weaknesses:
              {this.props.location.state.weaknesses.map((weakness, i) => (
                <div className="type weaknessBadge" key={weakness + i}>
                  {weakness}
                </div>
              ))}
            </div>
            <div>
              Egg: <span className="egg">{this.props.location.state.egg}</span>
            </div>
          </div>
        </div>
        <Link to="/" className="goBack">
          Back
        </Link>
      </div>
    );
  }
}

export default PokemonDescription;
