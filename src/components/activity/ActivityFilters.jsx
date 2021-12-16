import classNames from "classnames";
import styles from "./ActivityFilters.module.scss"
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import { useState } from "react"
import { Box } from "@mui/material/node_modules/@mui/system";

export default function ActivityFilters({ filters, setSortByFilter, setTypeFilter }) {
    const [sortBy, setSortBy] = useState("")
    const [type, setType] = useState("")

    const handleSortBy = (event) => {
        setSortBy(event.target.value)
        setSortByFilter(event.target.value)
    }

    const handleTimePeriod = (event) => {
        setType(event.target.value)
        setTypeFilter(event.target.value)
    }

    return (
        <div className={classNames(styles['activity-filters'])}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems="center"
                spacing={1}>
                <FormControl sx={{ width: "220px" }}>
                    <InputLabel id="sort-by-label" sx={{ paddingLeft: "10px" }}>{"Sort by"}</InputLabel>
                    <Select
                        labelId="sort-by-label"
                        sx={{ div: { paddingLeft: "25px" } }}
                        value={sortBy}
                        onChange={handleSortBy}>
                        {filters.sort.map(el => {
                            return <MenuItem key={el.label} value={el.value}>{el.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: "220px" }}>
                    <InputLabel id="type-label" sx={{ paddingLeft: "10px" }}>{"Type"}</InputLabel>
                    <Select
                        labelId="type-label"
                        sx={{ div: { paddingLeft: "25px" } }}
                        value={type}
                        onChange={handleTimePeriod}>
                        {filters.type.map(el => {
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