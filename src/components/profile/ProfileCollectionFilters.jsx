import classNames from "classnames";
import styles from "./ProfileCollectionFilters.module.scss"
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";

export default function ProfileCollectionFilters({ filters }) {

    const [sortBy, setSortBy] = useState("")
    const [timePeriod, setTimePeriod] = useState("")

    const handleSortBy = (event) => {
        setSortBy(event.target.value)
    }

    const handleTimePeriod = (event) => {
        setSortBy(event.target.value)
    }

    return (
        <div className={classNames(styles['profile-collection-filters'])}>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}>
                <FormControl sx={{width: "220px"}}>
                    <InputLabel id="sort-by-label">{"Sort by"}</InputLabel>
                    <Select
                        labelId="sort-by-label"
                        sx={{ minWidth: "170px" }}
                        value={sortBy}
                        onChange={handleSortBy}>
                        {filters.sort.map(el => {
                             return <MenuItem key={el.label} value={el.value}>{el.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl sx={{width: "220px"}}>
                    <InputLabel id="price-range-label">{"Price range"}</InputLabel>
                    <Select
                        labelId="price-range-label"
                        sx={{ minWidth: "170px" }}
                        value={timePeriod}
                        onChange={handleTimePeriod}>
                        {filters.price.map(el => {
                             return <MenuItem key={el.label} value={el.value}>{el.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl sx={{width: "340px"}}>
                <TextField fullWidth  sx={{ div: { backgroundColor: 'rgb(24, 24,40)' } }}  InputProps={{
                    startAdornment: (
                        < InputAdornment position="start" color="secondary" variant="standard" >
                            <SearchIcon sx={{ color: "#E1E1FC" }} />
                        </InputAdornment>
                    )
                }} />
                </FormControl>
            </Stack>
        </div>
    )
}