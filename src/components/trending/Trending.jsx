import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import Card from '../card/Card';
import styles from "./Trending.module.scss";
import classNames from "classnames";

export default function Trending({ cards = [], filters = [] }) {
    const [period, setPeriod] = useState("1")

    const handleChange = (event) => {
        setPeriod(event.target.value)
    }
    console.log(filters)
    return (
        <Container disableGutters sx={{ paddingY: "50px" }} maxWidth="xl">
            <Grid container className={classNames(styles["title-filters-container"])}
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