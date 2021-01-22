import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from "react-color";


class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "teal",
            newColorName: "",
        }
    }


    updateCurrentColor = (newColor) => {
        this.setState({ currentColor: newColor.hex })
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor)
    }


    render() {

        const { paletteIsFull } = this.props
        const { currentColor, newColorName } = this.state

        return (
            <div>
                <ChromePicker color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                />
                <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
                    <TextValidator
                        label="Color Name"
                        onChange={this.handleChange}
                        value={newColorName}
                        name="newColorName"
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={['Enter a color name', 'Please enter a unique color name', 'Color already used!']}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color='primary'
                        style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
                        disabled={paletteIsFull}
                    >

                        {paletteIsFull ? 'Palette Full' : 'Add New Color'}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default ColorPickerForm