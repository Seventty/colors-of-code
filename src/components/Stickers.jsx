import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Sticker } from './Stickers/Sticker';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/Desktop.png'})`,
        backgroundSize: 'cover',
        padding: theme.spacing(7),
    },
    root: {
        flexGrow: 1,
    },
    clasification: {
        marginBottom: "10px",
        background: colorPalette => `linear-gradient(45deg, ${colorPalette.firstColor} 30%, ${colorPalette.secondColor} 90%)`,
        border: 0,
        borderRadius: 3,
        boxShadow: colorPalette => `0 0px 5px 1px ${colorPalette.secondColor}`,
        color: 'white',
        height: 40,
        width: "70px",
        padding: '0 11px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    clasificationTitle: {
        fontFamily: "Nunito"
    }
}));

const stickers = [
    { id: 1, name: "HTML", description: "El emblema legendario usado por los nobles combatienes que dieron su vida por el reino de HTML desde tiempos inmemoriales, aquí el escudo de todo aquel que da su vida para mantener los muros de la web levantados y con la frente en alto.", image: "http://ih0.redbubble.net/image.127584817.4804/sticker,375x360.u2.png"},
    { id: 2, name: "CSS", description: "El emblema legendario usado por los nobles combatienes que dieron su vida por el reino de HTML desde tiempos inmemoriales, aquí el escudo de todo aquel que da su vida para mantener los muros de la web levantados y con la frente en alto.", image: "http://ih0.redbubble.net/image.127584817.4804/sticker,375x360.u2.png"},
    { id: 3, name: "JavaScript", description: "El emblema legendario usado por los nobles combatienes que dieron su vida por el reino de HTML desde tiempos inmemoriales, aquí el escudo de todo aquel que da su vida para mantener los muros de la web levantados y con la frente en alto.", image: "http://ih0.redbubble.net/image.127584817.4804/sticker,375x360.u2.png"},
    { id: 4, name: "HTML", description: "El emblema legendario usado por los nobles combatienes que dieron su vida por el reino de HTML desde tiempos inmemoriales, aquí el escudo de todo aquel que da su vida para mantener los muros de la web levantados y con la frente en alto.", image: "http://ih0.redbubble.net/image.127584817.4804/sticker,375x360.u2.png"},
    { id: 5, name: "CSS", description: "El emblema legendario usado por los nobles combatienes que dieron su vida por el reino de HTML desde tiempos inmemoriales, aquí el escudo de todo aquel que da su vida para mantener los muros de la web levantados y con la frente en alto.", image: "http://ih0.redbubble.net/image.127584817.4804/sticker,375x360.u2.png"},
    { id: 6, name: "JavaScript", description: "El emblema legendario usado por los nobles combatienes que dieron su vida por el reino de HTML desde tiempos inmemoriales, aquí el escudo de todo aquel que da su vida para mantener los muros de la web levantados y con la frente en alto. El emblema legendario usado por los nobles combatienes que dieron su vida por el reino de HTML desde tiempos inmemoriales, aquí el escudo de todo aquel que da su vida para mantener los muros de la web levantados y con la frente en alto.", image: "http://ih0.redbubble.net/image.127584817.4804/sticker,375x360.u2.png"},

];

export const Stickers = ({ clasification, colorPalette }) => {
    const classes = useStyles(colorPalette);
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className={classes.clasification}>
                <Typography variant="h5" className={classes.clasificationTitle}>{clasification}</Typography>
            </div>
            <Grid container justify="center" spacing={4}>
                {stickers.map((sticker) => (
                    <Grid item key={sticker.id} xs={12} sm={6} md={4} lg={3}>
                        <Sticker stickers={sticker} colorPalette={colorPalette}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
