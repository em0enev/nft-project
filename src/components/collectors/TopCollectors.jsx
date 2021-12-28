import {
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import { useState } from "react";
import _ from "lodash";
import CollectorColumn from "./CollectorColumn";
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";

export default function TopCollectors({
    collectors = [],
    filters = [],
    setTopCollectorsFilter,
}) {
    const [sortBy, setSortBy] = useState("");

    let collectorsDescOrder = collectors.sort((first, second) => {
        return first > second;
    });

    collectorsDescOrder.map((x) => (x.number = collectorsDescOrder.indexOf(x)));

    collectorsDescOrder = _.chunk(collectorsDescOrder, 3);

    const handleChange = (event) => {
        setSortBy(event.target.value);
        setTopCollectorsFilter(event.target.value);
    };

    return (
        <div className={classNames(styles["wrapper"])}>
            <Grid
                container
                maxWidth="xl"
                className={classNames(styles["top-collector-section"])}>
                <Grid
                    container
                    className={classNames(styles["title-filters-container"])}
                    justifyContent={{ xs: "center", md: "space-between" }}>
                    <Typography variant="h2">Top Collectors</Typography>
                    <FormControl
                        className={classNames(styles["dropdown-form"])}>
                        <InputLabel
                            className={classNames(styles["sortby-label"])}
                            id="sort-by-label">
                            Sort by
                        </InputLabel>
                        <Select
                            className={classNames(styles["select-menu"])}
                            labelId="sort-by-label"
                            value={sortBy}
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
                    className={classNames(styles["card-container"])}
                    justifyContent={{ xs: "center", md: "space-between" }}>
                    {collectorsDescOrder &&
                        collectorsDescOrder.map((el, i) => (
                            <CollectorColumn items={el} key={i} />
                        ))}
                </Grid>
            </Grid>
        </div>
    );
}
