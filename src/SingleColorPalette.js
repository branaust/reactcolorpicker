import React, { Component } from 'react'

class SingleColorPalette extends Component {

    goToSinglePalette = (id, level) => {
        this.props.history.push(`/palette/${id}/${level}`)
    }

    render() {
        return (
            <div>
                <h1>Single Color Palette</h1>
            </div>
        )
    }
}

export default SingleColorPalette