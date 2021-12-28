import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";
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

export default function ActivityFilters({
    filters,
    setSortByFilter,
    setTypeFilter,
}) {
    const [sortBy, setSortBy] = useState("");
    const [type, setType] = useState("");

    const handleSortBy = (event) => {
        setSortBy(event.target.value);
        setSortByFilter(event.target.value);
    };

    const handleTimePeriod = (event) => {
        setType(event.target.value);
        setTypeFilter(event.target.value);
    };

    return (
        <div className={classNames(styles["activity-filters"])}>
            <Stack
                className={classNames(styles["form-stack"])}
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                spacing={1}>
                <FormControl className={classNames(styles["dropdown-form"])}>
                    <InputLabel
                        id="sort-by-label"
                        className={classNames(styles["label-text"])}>
                        {"Sort by"}
                    </InputLabel>
                    <Select
                        className={classNames(styles["select-text"])}
                        labelId="sort-by-label"
                        value={sortBy}
                        onChange={handleSortBy}>
                        {filters.sort.map((el) => {
                            return (
                                <MenuItem key={el.label} value={el.value}>
                                    {el.label}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl className={classNames(styles["dropdown-form"])}>
                    <InputLabel
                        className={classNames(styles["label-text"])}
                        id="type-label">
                        {"Type"}
                    </InputLabel>
                    <Select
                        className={classNames(styles["select-text"])}
                        labelId="type-label"
                        value={type}
                        onChange={handleTimePeriod}>
                        {filters.type.map((el) => {
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
                        className={classNames(styles["text-fild"])}
                        fullWidth
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
