import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import styles from './styles/PaletteStyles'



class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = { format: "hex" }
    }

    gatherShades = (palette, colorToFilterBy) => {
        let shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1);
    }
    goToSinglePalette = (id, level) => {
        this.props.history.push(`/palette/${id}/${level}`)
    }

    changeFormat = (val) => {
        this.setState({ format: val })
    }


    render() {
        const { format } = this.state
        const { paletteName, emoji, id } = this.props.palette
        const { classes } = this.props
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showingFullPalette={false} />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                    <div className={classes.GoBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette)