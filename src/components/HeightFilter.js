import React from 'react';
import { Slider } from 'antd';


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
                range
                step={10}
                defaultValue={[20, 50]}
                onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default HeightFilter;