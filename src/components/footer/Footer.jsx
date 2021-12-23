import {
    Grid,
    Typography,
    Button,
    Container,
    ButtonGroup,
} from "@mui/material";
import Logo from "../logo/Logo.jsx";
import styles from "./Footer.module.scss";
import classNames from "classnames";

export default function Footer() {
    return (
        <div className={classNames(styles.divWrapper)}>
            <Grid
                container
                maxWidth="xl"
                direction="row"
                display={{ xs: "grid", md: "flex" }}
                justifyContent={{ xs: "center", md: "space-between" }}
                alignItems="center"
                sx={{
                    backgroundColor: "#181828",
                    height: "80px",
                    alignItems: "center",
                }}>
                <Grid item display={{ xs: "none", md: "flex" }}>
                    <Logo type={"muted"} />
                </Grid>
                <Grid item textAlign="center" order={{ xs: "2", md: "1" }}>
                    <Typography
                        color="textDisabled"
                        className={classNames(styles.text)}>
                        Bum All Rights Reserved 2021
                    </Typography>
                </Grid>
                <Grid item order={{ xs: "1", md: "2" }}>
                    <Button
                        sx={{ color: "#FFFFFF", padding: "0 10px 0 0" }}
                        size="small">
                        Privacy Policy
                    </Button>
                    <Button
                        sx={{ color: "#FFFFFF", padding: "0 0 0 10px" }}
                        size="small">
                        Cookie Policy
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
