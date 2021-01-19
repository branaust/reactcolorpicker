import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import Footer from './Footer'
import { withStyles } from '@material-ui/styles'
import './Palette.css'

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    PaletteColors: {
        height: "90%"
    },
    PaletteFooter: {
        backgroundColor: "#fff",
        height: "5vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bold",
    },
    Emoji: {
        fontSize: "1.5rem",
        margin: "1rem",
    }
}

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" };
    }

    changeLevel = (level) => {
        this.setState({ level })
    }

    changeFormat = (val) => {
        this.setState({ format: val })
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette
        const { classes } = this.props
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showingAllColors
                />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                </div>
                <Footer className={classes.PaletteFooter} paletteName={paletteName} emoji={emoji} />
            </div >
        )
    }
}

export default withStyles(styles)(Palette);
