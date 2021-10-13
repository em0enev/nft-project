import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Logo from '../logo/logo';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import styles from "./Header.module.scss"
import classNames from "classnames";


export default function Header() {
    return (
        <Grid container
            sx={{borderTop:" 2px dashed #4e24f2", borderBottom:" 2px dashed #4e24f2", padding: "5px"}}
            direction="row"
            justifyContent="space-between" >
            <Grid item xs={2}>
                <Logo></Logo>
            </Grid>
            <Grid item xs={5}>
                <TextField fullWidth placeholder="Find items, users and activities" variant="outlined" InputProps={{
                    startAdornment: (
                        < InputAdornment position="start" >
                            <SearchIcon color="primary" />
                        </InputAdornment>
                    )
                }} />
            </Grid>
            <Grid item xs container
                direction="row"
                justifyContent="flex-end"
                alignItems="center">

                <Button variant='text'>Home</Button>
                <Button variant='text'>Activity</Button>
                <Button variant="contained">Explore</Button>
            </Grid>
        </Grid >
    );
}