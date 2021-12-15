import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import Card from '../card/Card';
import classNames from "classnames";
import styles from "./Auctions.module.scss"
import { makeStyles } from "@mui/styles";
import theme from '../../theme.js'

const useStyles = makeStyles(() => ({
    'title-filters-container': {
        [theme.breakpoints.down('md')]: {
            textAlign: "center",
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


export default function Auctions({ cards = [], filters = [], setLiveAuctionsFilterValue }) {
    const [priceRange, setPriceRange] = useState("")
    const classes = useStyles();

    const handleChange = (event) => {
        setPriceRange(event.target.value)
        setLiveAuctionsFilterValue(event.target.value)
    }

    return (
        <div className={classNames(styles['wrapper'])}>
            <Container sx={{ paddingY: "30px" }} maxWidth="xl" >
                <Grid container
                    className={classNames(classes['title-filters-container'])}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ marginY: "50px" }}>
                    <Typography variant="h2">🔥 Live Auctions</Typography>
                    <FormControl>
                        <InputLabel sx={{ paddingLeft: "12px" }} id="price-range-label">Price range</InputLabel>
                        <Select
                            sx={{ width: "220px" }}
                            labelId="price-range-label"
                            value={priceRange}
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
                        return <Card key={card.name} name={card.name} likes={card.likes} price={card.price} currency={card.currency} user={card.owner} mediaUrl={card.mediaUrl} timeLeft={card.auction_end}></Card>
                    })}
                </Grid>
            </Container >
        </div>
    );
}