import React, { Component } from "react";
import PaletteFormNav from './PaletteFormNav'
import ColorPickerForm from './ColorPickerForm'
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from './DraggableColorList'
import { ValidatorForm } from 'react-material-ui-form-validator';
import randomColor from 'randomcolor'
import { arrayMove } from "react-sortable-hoc";

const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: "flex"
    },

    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth,
        height: "calc(100vh - 64px)"
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
});

class NewPaletteForm extends Component {
    static defaultProps = {
        maxColors: 20
    }
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            colors: this.props.palettes[0].colors,
        }
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            this.state.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        )
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            this.state.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        )
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    addNewColor = (newColor) => {
        this.setState({
            colors: [...this.state.colors, newColor],
            newColorName: ""
        });
    }


    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (newPaletteName) => {
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(/ /g, '-'),
            colors: this.state.colors
        }
        this.props.savePalette(newPalette);
        this.props.history.push("/")
    }
    deleteBox = (colorName) => {
        this.setState({
            colors: this.state.colors.filter(color => color.name !== colorName)
        })
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex)
        }))
    }
    clearPalette = () => {
        this.setState({
            colors: []
        })
    }
    randomColor = () => {
        const randColor = randomColor()
        const newColor = { color: randColor, name: randomColor }

        this.setState({
            colors: [...this.state.colors, newColor]
        })
    }

    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors } = this.state;
        const paletteIsFull = colors.length >= maxColors

        return (
            <div className={classes.root}>
                <PaletteFormNav
                    open={open}
                    handleSubmit={this.handleSubmit}
                    handleDrawerOpen={this.handleDrawerOpen}
                    palettes={palettes}
                />
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <Typography variant="h4">Design Your Palette</Typography>
                    <div>
                        <Button
                            onClick={this.clearPalette}
                            variant="contained"
                            color="secondary">Clear Palette</Button>
                        <Button
                            onClick={this.randomColor}
                            variant="contained"
                            color={paletteIsFull ? 'grey' : "primary"}
                            disabled={paletteIsFull}
                        >

                            Random Color
                        </Button>
                    </div>
                    <ColorPickerForm
                        colors={colors}
                        maxColors={maxColors}
                        currentColor={this.state.currentColor}
                        newColorName={this.state.newColorName}
                        paletteIsFull={paletteIsFull}
                        addNewColor={this.addNewColor}
                    />

                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <DraggableColorList
                        colors={this.state.colors}
                        deleteBox={this.deleteBox}
                        axis='xy'
                        onSortEnd={this.onSortEnd}
                    />
                </main>
            </div >
        );
    }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);