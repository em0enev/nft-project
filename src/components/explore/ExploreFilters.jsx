import classNames from "classnames";
import styles from "./ExploreFilters.module.scss"
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import { useState } from "react"


export default function ExploreFilters({ filters }) {
    const [sortBy, setSortBy] = useState("")
    const [price, setPrice] = useState("")
    console.log(filters)
    const handleSortBy = (event) => {
        setSortBy(event.target.value)
    }

    const handleTimePeriod = (event) => {
        setPrice(event.target.value)
    }

    return (
        <div className={classNames(styles['explore-filters'])}>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}>
                <FormControl sx={{ width: "220px" }}>
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
                <FormControl sx={{ width: "220px" }}>
                    <InputLabel id="price-range-label">{"Price range"}</InputLabel>
                    <Select
                        labelId="price-range-label"
                        sx={{ minWidth: "170px" }}
                        value={price}
                        onChange={handleTimePeriod}>
                        {filters.price.map(el => {
                            return <MenuItem key={el.label} value={el.value}>{el.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: "340px" }}>
                    <TextField fullWidth sx={{ div: { backgroundColor: 'rgb(24, 24,40)' } }} InputProps={{
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