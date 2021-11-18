import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Logo from '../logo/Logo.jsx';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import classNames from "classnames";
import styles from "./Header.module.scss"

export default function Header() {
    return (
        <div className={classNames(styles["header-container"])}>
            <Grid container
                maxWidth="xl"
                sx={{ height: "98px", alignItems: "center" }}
                direction="row"
                justifyContent="space-between">
                <Grid item xs={2}>
                    <Logo></Logo>
                </Grid>
                <Grid item xs={5}>
                    <TextField fullWidth placeholder="Find items, users and activities" sx={{ div: { backgroundColor: 'rgba(12, 12, 20, 1)' }, width: "580px" }} variant="outlined" InputProps={{
                        startAdornment: (
                            < InputAdornment position="start" color="secondary" >
                                <SearchIcon sx={{ color: "white" }} />
                            </InputAdornment>
                        )
                    }} />
                </Grid>
                <Grid item xs={5} container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center">
                    <Button variant='text' sx={{ color: "white" }} >Home</Button>
                    <Button variant='text' sx={{ color: "white" }}>Activity</Button>
                    <Button variant="contained">Explore</Button>
                </Grid>
            </Grid >
        </div>
    );
}