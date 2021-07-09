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
        padding: '3px 11px',
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Nunito"
    },
    specialClasification: {
        marginBottom: "10px",
        background: "#000",
        color: 'white',
        padding: '3px 11px',
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Nunito"
    },
}));


export const Stickers = ({ clasification, colorPalette, stickerList, special }) => {
    const classes = useStyles(colorPalette);
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div>
                <Typography variant="h5" className={special ? classes.specialClasification : classes.clasification}>{clasification}</Typography>
            </div>
            <Grid container justify="center" spacing={4}>
                {stickerList.map((sticker) => (
                    <Grid item key={sticker.id} xs={12} sm={6} md={4} lg={3}>
                        {<Sticker stickers={sticker} colorPalette={colorPalette} special={special}/>}
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}


