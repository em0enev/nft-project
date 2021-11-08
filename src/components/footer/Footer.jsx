import { Grid, Typography, Button, Container } from "@mui/material";
import Logo from "../logo/Logo.jsx"
import styles from "./Footer.module.scss";
import classNames from "classnames";

export default function Footer() {
    return (
        <div className={classNames(styles.divWrapper)}>
            <Grid
                container
                maxWidth="lg"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ backgroundColor: "#181828", height: "80px", alignItems: "center"}}>
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
        </div>
    )
}