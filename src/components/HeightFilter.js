import React from "react";
import { Slider } from "antd";

class HeightFilter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onHeightUpdate(value);
  }

  render() {
    /* useless
        
        var heightArray = [];
        this.props.pokemonsList.map(pokemon => {
            heightArray.push(parseFloat(pokemon.height));
        });
        let max = Math.max.apply(null, heightArray); 
        
        */
    return (
      <div className="HeightFilter__container">
        <Slider
          min={0}
          max={9}
          step={0.5}
          defaultValue={4}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default HeightFilter;
