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
        <div className={classNames(styles.divWrapper)}>
            <Grid
                container
                maxWidth="xl"
                className={classNames(styles["top-collector-section"])}>
                <Grid
                    container
                    item
                    className={classNames(styles["title-filters-container"])}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Typography variant="h2">Top Collectors</Typography>
                    <FormControl>
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
                            {filters.map((el, i) => (
                                <MenuItem key={i} value={el.value}>
                                    {el.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid
                    container
                    item
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={"10px"}>
                    {collectorsDescOrder &&
                        collectorsDescOrder.map((el, i) => (
                            <Grid
                                item
                                key={i}
                                sx={{ maxWidth: "340px", width: "100%" }}>
                                <CollectorColumn items={el} key={i} />
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </div>
    );
}
