import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Sticker } from './Stickers/Sticker';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8),
    },
    root: {
        flexGrow: 1,
    },
    clasification: {
        margin: "1px",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 40,
        width: 50,
        padding: '0 11px',
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

export const Stickers = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Typography variant="h5" className={classes.clasification}>Élite</Typography>
            <Grid container justify="center" spacing={4}>
                {stickers.map((sticker) => (
                    <Grid item key={sticker.id} xs={12} sm={6} md={4} lg={3}>
                        <Sticker stickers={sticker}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
