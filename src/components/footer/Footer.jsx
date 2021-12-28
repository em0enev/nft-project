import { Grid, Typography, Button } from "@mui/material";
import Logo from "../logo/Logo.jsx";
import styles from "./Footer.module.scss";
import classNames from "classnames";

export default function Footer() {
    return (
        <div className={classNames(styles["divWrapper"])}>
            <Grid
                container
                maxWidth="xl"
                className={classNames(styles["footer-container"])}
                display={{ xs: "grid", md: "flex" }}
                justifyContent={{ xs: "center", md: "space-between" }}>
                <Grid
                    item
                    className={classNames(styles["logo"])}
                    display={{ xs: "none", md: "flex" }}>
                    <Logo type={"muted"} />
                </Grid>
                <Grid item textAlign="center" order={{ xs: "2", md: "1" }}>
                    <Typography
                        color="textDisabled"
                        className={classNames(styles["text"])}>
                        Bum All Rights Reserved 2021
                    </Typography>
                </Grid>
                <Grid
                    container
                    item
                    order={{ xs: "1", md: "2" }}
                    xs={"auto"}
                    spacing={2}>
                    <Grid item>
                        <Button
                            className={classNames(styles["button"])}
                            size="small">
                            Privacy Policy
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            className={classNames(styles["button"])}
                            size="small">
                            Cookie Policy
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
