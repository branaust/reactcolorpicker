/* eslint-disable */
import chroma from 'chroma-js'
import sizes from './sizes'

export default {

    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-6.2px",
        textTransform: "uppercase",
        "&:hover button": {
            opacity: "1",
            transition: "0.2s",
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => props.showingFullPalette ? "20%" : "33.333%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => props.showingFullPalette ? "10%" : "20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.showingFullPalette ? "5%" : "10%",
        },


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
            [sizes.down("xs")]: {
                fontSize: "2.5rem"
            }
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