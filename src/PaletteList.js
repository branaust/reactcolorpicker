import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteListStyles'
import DeletePaletteDialog from './DeletePaletteDialog'




class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeleteDialog: false,
            deletingId: ""
        }
    }

    openDialog = (id) => {
        this.setState({ openDeleteDialog: true, deletingId: id })
    };

    closeDialog = () => {
        this.setState({ openDeleteDialog: false, deletingId: "" })
    };

    goToPalette = (id) => {
        this.props.history.push(`/palette/${id}`)
    }



    render() {
        const { openDeleteDialog, deletingId } = this.state
        const { palettes, classes, deletePalette } = this.props
        return (
            <div className={classes.root} >
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link className="" to="/palette/new">Create Palette</Link>
                    </nav>

                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                                <MiniPalette {...palette}
                                    handleClick={this.goToPalette}
                                    // deletePalette={deletePalette}
                                    openDialog={this.openDialog}
                                    key={palette.id}
                                    id={palette.id}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    {<DeletePaletteDialog
                        openDeleteDialog={openDeleteDialog}
                        openDialog={this.openDialog}
                        closeDialog={this.closeDialog}
                        deletePalette={deletePalette}
                        deletingId={deletingId}
                    />}
                </div>
            </div>


        )
    }
}

export default withStyles(styles)(PaletteList)