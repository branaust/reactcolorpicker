import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import CheckIcon from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'


class DeletePaletteDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    handleDelete = () => {
        this.props.deletePalette(this.props.deletingId)
        this.props.closeDialog()
    }

    render() {

        const { openDeleteDialog, closeDialog, deletePalette, deletingId } = this.props

        return (
            <div>

                <Dialog open={openDeleteDialog} onClose={closeDialog} aria-labelledby="delete-dialog-title">
                    <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText onClick={deletePalette}>
                                Delete
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                                    <Close />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText onClick={closeDialog}>
                                Cancel
                            </ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}


export default DeletePaletteDialog