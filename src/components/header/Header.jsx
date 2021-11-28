import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Logo from '../logo/Logo.jsx';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import classNames from "classnames";
import styles from "./Header.module.scss"
import { makeStyles } from "@mui/styles";
import theme from '../../theme.js'

const useStyles = makeStyles(() => ({
    "logo": {
        [theme.breakpoints.down('md')]: {
            display: "none"
        }
    },
    "buttons-container": {
        [theme.breakpoints.down('md')]: {
            justifyContent: "center"
        }
    },
    "grid-container": {
        [theme.breakpoints.down('md')]: {
            gap: "10px"
        }
    },
    'text-field-container': {
        [theme.breakpoints.down('md')]: {
            padding: "0 15px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    }
}))

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classNames(styles["header-container"])}>
            <Grid container
                className={classNames(styles["grid-container"], classes['grid-container'])}
                maxWidth="xl"
                alignItems="center"
                direction="row"
                justifyContent="space-between">
                <Grid item
                    item xl={2} md={2} sm={12} xs={12}
                    className={classNames(classes['logo'])}>
                    <Logo></Logo>
                </Grid>
                <Grid item
                    xl={5} md={5} sm={12} xs={12}
                    className={classNames(classes['text-field-container'])} >
                    <TextField fullWidth
                        placeholder="Find items, users and activities"
                        sx={{ div: { backgroundColor: 'rgba(12, 12, 20, 1)' } }}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                < InputAdornment position="start" color="secondary" >
                                    <SearchIcon sx={{ color: "white" }} />
                                </InputAdornment>
                            )
                        }} />
                </Grid>
                <Grid item container
                    xl={5} md={5} sm={12} xs={12}
                    className={classNames(classes['buttons-container'])}
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center">
                    <Button variant='text' sx={{ color: "white" }}>Home</Button>
                    <Button variant='text' sx={{ color: "white" }}>Activity</Button>
                    <Button variant="contained">Explore</Button>
                </Grid>
            </Grid >
        </div >
    );
}