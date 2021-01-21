import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from "./styles/ColorBoxStyles"
import { withStyles } from "@material-ui/styles"
import chroma from 'chroma-js'



class ColorBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
    }

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        const { name, background, moreUrl, showingFullPalette, classes } = this.props
        const { copied } = this.state
        const isDark = chroma(background).luminance() <= 0.06
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.ColorBox} style={{ background }} >
                    <div
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
                        style={{ background }}
                    />
                    <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                        <h1>Copied!</h1>
                        <p classname={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={isDark && "light-text"}>{name}</span>
                        </div>

                        <button className={classes.copyButton}> Copy </button>

                    </div>
                    {showingFullPalette && (
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>More</span>
                        </Link>
                    )}


                </div >
            </CopyToClipboard >

        )
    }
}

export default withStyles(styles)(ColorBox)