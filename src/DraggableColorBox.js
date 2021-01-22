import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px",
        textTransform: "uppercase",
        cursor: "pointer",

        "&:hover svg": {
            color: "#fff",
            transform: "scale(1.5)"
        }
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "rgba(0,0,0,0.5)",
        textAlign: "left",
        letterSpacing: "1px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.2s ease-in-out"


    }
}

const DraggableColorBox = SortableElement(props => {

    const { classes, handleClick, name, color } = props

    return (
        <div
            className={classes.root}
            style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <HighlightOffIcon className={classes.deleteIcon} onClick={handleClick} />
            </div>


        </div>
    )
})

export default withStyles(styles)(DraggableColorBox)