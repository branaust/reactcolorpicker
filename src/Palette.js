import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar'

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
                <Navbar level={level} changeLevel={this.changeLevel} />
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