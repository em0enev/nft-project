import { Container, FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import Card from '../card/Card';

export default function Auctions({ cards = [] }) {
    const [period, setPeriod] = useState("This Week")

    const handleChange = (event) => {
        setPeriod(event.target.value)
    }

    return (
        <Container>
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ marginY: "10px" }}
            >
                <Typography variant="h2">Live Auctions</Typography>
                <FormControl>
                    <Select
                        sx={{ minWidth: "170px" }}
                        id="time-period"
                        value={period}
                        onChange={handleChange}
                    >
                        <MenuItem value={"This Week"}>This Week</MenuItem>
                        <MenuItem value={"This Month"}>This Month</MenuItem>
                    </Select>
                </FormControl>
            </Grid >
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                {cards.map(card => {
                    return <Card key={card.name} name={card.name} price={card.price} currency={card.currency} user={card.user} mediaUrl={card.mediaUrl} timeLeft={card.timeLeft}></Card>
                })}
            </Grid>
        </Container >
    );
}