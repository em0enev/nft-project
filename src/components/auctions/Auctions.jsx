import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import Card from '../card/Card';


export default function Auctions({ cards = [], filters = [] }) {
    const [priceRange, setPriceRange] = useState("")

    const handleChange = (event) => {
        setPriceRange(event.target.value)
    }

    return (
        <Container disableGutters sx={{ paddingY: "30px" }} maxWidth="xl">
            <Grid container
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
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                {cards.map(card => {
                    return <Card key={card.name} name={card.name} likes={card.likes} price={card.price} currency={card.currency} user={card.owner} mediaUrl={card.mediaUrl} timeLeft={card.auction_end}></Card>
                })}
            </Grid>
        </Container >
    );
}