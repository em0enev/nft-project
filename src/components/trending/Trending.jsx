import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import Card from '../card/Card';
import styles from "./Trending.module.scss";
import classNames from "classnames";
import { makeStyles } from "@mui/styles";
import theme from '../../theme.js'

const useStyles = makeStyles(() => ({
    'title-filters-container': {
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
            gap: "10px"
        }
    },
    'cards-container': {
        [theme.breakpoints.down('lg')]: {
            justifyContent: 'center',
            gap: "10px"
        }
    }
}))

export default function Trending({ cards = [], filters = [], setTimePeriod }) {
    const [period, setPeriod] = useState("1")
    const classes = useStyles();

    const handleChange = (event) => {
        setPeriod(event.target.value)
        setTimePeriod(event.target.value)
    }
    
    return (
        <Container disableGutters maxWidth="xl" className={classNames(styles["trending-section-container"])}>
            <Grid container
                className={classNames(styles["title-filters-container"], classes['title-filters-container'])}
                direction="row">
                <Typography variant="h2">Trending</Typography>
                <FormControl>
                    <Select
                        className={classNames(styles["select-menu"])}
                        id="time-period"
                        value={period}
                        onChange={handleChange}>
                        {filters.map(el => {
                            return <MenuItem key={el.value} value={el.value}>{el.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Grid >
            <Grid container
                className={classNames(classes['cards-container'])}
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                {cards.map(card => {
                    return <Card key={card.name} name={card.name} price={card.price} currency={card.currency} likes={card.likes} user={card.owner} mediaUrl={card.mediaUrl}></Card>
                })}
            </Grid>
        </Container >
    );
}