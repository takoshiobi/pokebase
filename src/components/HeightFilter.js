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
