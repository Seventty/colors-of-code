import React from 'react'
import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import seasonStyle from './seasonStyle.module.css';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        border: colorPalette => `1px solid ${colorPalette.firstColor}`,
        boxShadow: colorPalette => `0 3px 6px 0 rgba(${colorPalette.thirdColor})`,
        background: "rgb(0,0,0,0.6)",
        color: "#fff",
        fontFamily: "Nunito"
    },
    special: {
        maxWidth: '100%',
        border: "5px solid",
        borderImage: "conic-gradient(from 0deg, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f, #abf25f, #5ff281, #5ff2f0, #5f86f2) 1",
        background: "rgb(0,0,0,0.6)",
        color: "#fff",
        fontFamily: "Nunito",
    },
    
    media: {
        height: 100,
        paddingTop: '56.25%',
        
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
    },
    cardBox: {
        width: "auto",
        height: "100px",
        overflow: "auto"
    },
    title: {
        fontFamily: "Nunito"
    }
});

export const Sticker = ({ stickers, colorPalette, special, season }) => {
    const classes = useStyles(colorPalette);
    
    return (
        <Card className={special ? classes.special : classes.root}>
            <CardMedia className={classes.media} image={stickers.image} title={stickers.name}/>
            <CardContent className={classes.cardBox}>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom className={classes.title}>
                        {stickers.name}
                    </Typography>
                </div>
                <Typography variant="body1">{stickers.description}</Typography>
            </CardContent>
        </Card>
    )
}
