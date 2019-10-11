import React from "react";
import { Input } from "antd";

class TextInput extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onQueryUpdate(event.target.value);
  }

  render() {
    return (
      <div className="TextInput__container">
        <div style={{ marginBottom: 16 }}>
          <Input
            onChange={this.handleChange}
            placeholder="Name or type of pokémon"
            defaultValue=""
          />
        </div>
      </div>
    );
  }
}

export default TextInput;
