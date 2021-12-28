import {
    Container,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import { useState } from "react";
import Card from "../card/Card";
import styles from "./Trending.module.scss";
import classNames from "classnames";

export default function Trending({ cards = [], filters = [], setTimePeriod }) {
    const [period, setPeriod] = useState("1");

    const handleChange = (event) => {
        setPeriod(event.target.value);
        setTimePeriod(event.target.value);
    };

    return (
        <Container
            className={classNames(styles["trending-section-container"])}
            maxWidth="xl">
            <Grid
                container
                className={classNames(styles["title-filters-container"])}
                justifyContent={{ xs: "center", sm: "space-between" }}>
                <Typography variant="h2">Trending</Typography>
                <FormControl className={classNames(styles["select-form"])}>
                    <Select
                        className={classNames(styles["select-menu"])}
                        id="time-period"
                        value={period}
                        onChange={handleChange}>
                        {filters.map((el) => (
                            <MenuItem key={el.value} value={el.value}>
                                {el.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid
                container
                className={classNames(styles["cards-container"])}
                justifyContent={{ xs: "center", md: "space-between" }}>
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </Grid>
        </Container>
    );
}
