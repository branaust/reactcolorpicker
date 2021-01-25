import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styles from './styles/DraggableColorBoxStyles'

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

