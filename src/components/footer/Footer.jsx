import { Grid, Typography, Button } from "@mui/material";
import Logo from "../logo/Logo.jsx"
import styles from "./Footer.module.scss";
import classNames from "classnames";

export default function Footer() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Grid item >
                <Logo type={"muted"} />
            </Grid>
            <Grid item >
                <Typography className={classNames(styles.text)}>Bum All Rights Reserved 2021</Typography>
            </Grid>
            <Grid item >
                <Button sx={{ color: "#FFFFFF", paddingY: "0px", paddingLeft: "0px", paddingRight: "10px" }}>Privacy Policy</Button>
                <Button sx={{ color: "#FFFFFF", paddingY: "0px", paddingLeft: "10px", paddingRight: "0px" }}>Cookie Policy</Button>
            </Grid>
        </Grid>
    )
}