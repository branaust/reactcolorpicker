/* eslint-disable */

import sizes from './sizes'

export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
        [sizes.down("xs")]: {
            flexDirection: "column",
            height: "10vh",
        }
    },

    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",

        "& a": {
            textDecoration: "none",
            color: "black",
        },
        [sizes.down("xs")]: {
            width: "100%",
            marginRight: "0",
            padding: "8px 13px",
        }
    },

    slider: {
        width: "350px",
        margin: "0 10px",
        display: "inline-block",
        [sizes.down("xs")]: {
            width: "150px"
        }
    },

    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",
    }
}