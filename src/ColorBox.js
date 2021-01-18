import React, { Component } from 'react'
import './ColorBox.css'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withStyles } from "@material-ui/styles"
import chroma from 'chroma-js'

const styles = {

    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px",
        textTransform: "uppercase",
        "&:hover button": {
            opacity: "1",
            transition: "0.2s",
        }
    },
    copyText: {
        color: props =>
            chroma(props.background).luminance() >= .07 ? "rgba(0,0,0,0.6)" : "white",
        background: "rgba(255,255,255, 0.3)",
        position: "absolute",
        padding: "5px",
        right: "0px",
        bottom: "0px",
        textAlign: "center",
        width: "60px",
        height: "30px",
        lineHeight: "30px",
        cursor: "pointer"
    },

    copyButton: {
        color: props =>
            chroma(props.background).luminance() >= .09 ? "rgba(0,0,0,0.6)" : "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255, 0.3)",
        fontSize: "1rem",
        lineHeight: "20px",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        opacity: "0"
    },

    seeMore: {
        background: "rgba(255,255,255, 0.3)",
        position: "absolute",
        padding: "5px",
        right: "0px",
        bottom: "0px",
        textAlign: "center",
        color: "white",
        width: "60px",
        height: "30px",
        lineHeight: "30px",
        cursor: "pointer",
    },

    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "black",
        textAlign: "left",
        letterSpacing: "1px",
        fontSize: "12px",
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute",
    },
    copyMessage: {
        position: "fixed",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",

        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255,255,255, 0.3)",
            width: "100%",
            marginBottom: "0",
            padding: "1rem",
        },

        "& p": {
            fontSize: "2rem",
            fontWeight: "200",
        }
    },
    showMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",



        "&:p": {}
    }

}

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
        const isLight = chroma(background).luminance() >= 0.6
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