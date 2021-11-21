import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import _ from "lodash"
import CollectorColumn from "./CollectorColumn";
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";

export default function TopCollectors({ collectors = [], filters = [] }) {
    const [sortBy, setSortBy] = useState("")

    let collectorsDescOrder = collectors.sort((first, second) => {
        return first > second
    })

    collectorsDescOrder.map(x => x.number = collectorsDescOrder.indexOf(x))

    collectorsDescOrder = _.chunk(collectorsDescOrder, 3)

    const handleChange = (event) => {
        setSortBy(event.target.value)
    }

    return (
        <div className={classNames(styles.divWrapper)}>
            <Container disableGutters maxWidth="xl" sx={{ paddingY: "110px" }}>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ marginBottom: "40px" }}>
                    <Typography variant="h2">Top Collectors</Typography>
                    <FormControl >
                        <InputLabel sx={{ paddingLeft: "12px" }} id="sort-by-label">Sort by</InputLabel>
                        <Select
                            className={classNames(styles["select-menu"])}
                            labelId="sort-by-label"
                            value={sortBy}
                            onChange={handleChange}>
                            {filters.map((el, i) => {
                                return <MenuItem key={i} value={el.value}>{el.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Grid >
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    {collectorsDescOrder && collectorsDescOrder.map((el, i) => {
                        return <CollectorColumn items={el} key={i} />
                    })}
                </Grid>
            </Container >
        </div>
    );
}