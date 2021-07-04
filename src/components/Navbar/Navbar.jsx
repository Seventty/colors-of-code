import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
    },
    appbar: {
        background: "none",
        left: "20px",
    },
    title: {
        color: "#000",
        fontFamily: "Nunito",
        left: "30px",
    },
    colorsTag: {
        margin: "7px",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 10px',
    },
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.root} color="inherit">
                <Toolbar className={classes.appbar}>
                    <Typography variant="h6" className={classes.title}>#Colors-of-Code
                        <span className={classes.colorsTag}>Collection</span>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
