import { Grid, Typography, Button, Container, ButtonGroup } from "@mui/material";
import Logo from "../logo/Logo.jsx"
import styles from "./Footer.module.scss";
import classNames from "classnames";
import { makeStyles } from "@mui/styles";
import theme from '../../theme.js'

const useStyles = makeStyles(() => ({
    'footer-container': {
        [theme.breakpoints.down('md')]: {
            display: "grid",
            justifyContent: 'center'
        }
    },
    'logo-container': {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    'btn-container': {
        [theme.breakpoints.down('md')]: {
            order: 1
        }
    },
    'text-container': {
        [theme.breakpoints.down('md')]: {
            order: 2,
            textAlign:"center"
        }
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classNames(styles.divWrapper)}>
            <Grid container
                className={classNames(classes['footer-container'])}
                maxWidth="xl"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ backgroundColor: "#181828", height: "80px", alignItems: "center" }}>
                <Grid item  className={classNames(classes['logo-container'])}>
                    <Logo type={"muted"} />
                </Grid>
                <Grid item className={classNames(classes['text-container'])}>
                    <Typography color="textDisabled" className={classNames(styles.text)}>Bum All Rights Reserved 2021</Typography>
                </Grid>
                <Grid item className={classNames(classes['btn-container'])}>
                    <Button sx={{ color: "#FFFFFF", padding: "0 10px 0 0" }} size="small">Privacy Policy</Button>
                    <Button sx={{ color: "#FFFFFF", padding: "0 0 0 10px" }} size="small">Cookie Policy</Button>
                </Grid>
            </Grid>
        </div>
    )
}