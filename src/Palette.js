import React, { Component } from 'react'
import ColorBox from './ColorBox';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css'

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
    }

    changeLevel = (level) => {
        this.setState({ level })
    }

    render() {
        const { level } = this.state
        const colorBoxes = this.props.palette.colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className="Palette">
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                        trackStyle={{ backgroundColor: 'transparent' }}
                        railStyle={{ height: '8px' }}
                        handleStyle={{
                            backgroundColor: 'green',
                            borderColor: 'green',
                            height: '13px',
                            width: '13px',
                            marginTop: '-3px',
                        }}
                        activeDotStyle={{
                            borderColor: 'green',
                            boxShadow: 'none',
                            outline: 'none'
                        }}
                    />
                </div>
                {/* NAVBAR */}
                <div className={"Palette-colors"}>
                    {colorBoxes}
                </div>
                {/* FOOTER */}
            </div>
        )
    }
}

export default Palette;