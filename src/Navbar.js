import React, { Component } from 'react'
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Slider from 'rc-slider';
import Snackbar from "@material-ui/core/SnackBar"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import 'rc-slider/assets/index.css';
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import styles from './styles/NavBarStyles'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            format: 'hex',
            open: false
        }
    }
    handleFormatChange = (e) => {
        this.setState({ format: e.target.value })
        this.props.handleChange(e.target.value)
        this.showSnackbar()
    }

    showSnackbar = () => {
        this.setState({ open: true }, () => {
            setTimeout(() => this.setState({ open: false }), 3000)
        })
    }
    closeSnackbar = () => {
        this.setState({ open: false })
    }
    render() {
        const { level, changeLevel, classes } = this.props
        const { format } = this.state
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <NavLink exact to="/">reactcolorpicker</NavLink>
                </div>
                {/*If Palette, show Slider, else - hide*/}
                {this.props.showingAllColors &&
                    <div className="slider-container">
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
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
                    </div>
                }

                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
                    ContentProps={{ "aria-describedby": "message-id" }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color="inherit"
                            key="close"
                            aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar)