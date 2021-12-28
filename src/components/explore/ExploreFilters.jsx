import classNames from "classnames";
import styles from "./ExploreFilters.module.scss";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function ExploreFilters({
    filters,
    setSortByFilter,
    setPriceFilterValue,
}) {
    const [sortBy, setSortBy] = useState("");
    const [price, setPrice] = useState("");

    const handleSortBy = (event) => {
        setSortBy(event.target.value);
        setSortByFilter(event.target.value);
    };

    const handleTimePeriod = (event) => {
        setPrice(event.target.value);
        setPriceFilterValue(event.target.value);
    };

    return (
        <div className={classNames(styles["explore-filters"])}>
            <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}>
                <FormControl className={classNames(styles["dropdown-form"])}>
                    <InputLabel id="sort-by-label">{"Sort by"}</InputLabel>
                    <Select
                        labelId="sort-by-label"
                        value={sortBy}
                        onChange={handleSortBy}>
                        {filters &&
                            filters.sort.map((el) => {
                                return (
                                    <MenuItem key={el.label} value={el.value}>
                                        {el.label}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                </FormControl>
                <FormControl className={classNames(styles["dropdown-form"])}>
                    <InputLabel id="price-range-label">
                        {"Price range"}
                    </InputLabel>
                    <Select
                        labelId="price-range-label"
                        value={price}
                        onChange={handleTimePeriod}>
                        {filters.price.map((el) => {
                            return (
                                <MenuItem key={el.label} value={el.value}>
                                    {el.label}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl className={classNames(styles["input-form"])}>
                    <TextField
                        fullWidth
                        className={classNames(styles["text-fild"])}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    color="secondary"
                                    variant="standard">
                                    <SearchIcon
                                        className={classNames(
                                            styles["search-icon"]
                                        )}
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
            </Stack>
        </div>
    );
}
