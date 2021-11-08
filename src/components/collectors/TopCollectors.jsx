import { Container, FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import {  useState } from "react";
import _ from "lodash"
import CollectorColumn from "./CollectorColumn";
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";

export default function TopCollectors({ collectors = [] }) {
    const [period, setPeriod] = useState("This Week")

    let collectorsWithId = collectors.map((el, i) => {
        return ({
            ...el,
            "id": i
        })
    })

    collectorsWithId = _.chunk(collectorsWithId, 3)

    const handleChange = (event) => {
        setPeriod(event.target.value)
    }


    return (
        <div className={classNames(styles.divWrapper)}>
            <Container disableGutters maxWidth="lg" sx={{paddingY: "100px"}}>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ marginY: "10px" }}>
                    <Typography variant="h2">Top Collectors</Typography>
                    <FormControl>
                        <Select
                            sx={{ minWidth: "170px" }}
                            id="time-period"
                            value={period}
                            onChange={handleChange}>
                            <MenuItem value={"This Week"}>This Week</MenuItem>
                            <MenuItem value={"This Month"}>This Month</MenuItem>
                        </Select>
                    </FormControl>
                </Grid >
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    {collectorsWithId && collectorsWithId.map((el, i) => {
                        return <CollectorColumn items={el} key={i} />
                    })}
                </Grid>
            </Container >
        </div>
    );
}