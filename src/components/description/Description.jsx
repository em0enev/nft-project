import { Grid, Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./Description.module.scss";

export default function Description({ text, image }) {
    return (
        <Grid
            container
            className={classNames(styles["description"])}
            width={{ xs: "100%", md: "50%" }}
            padding={{ xs: "10px", md: "70px 50px" }}>
            <Grid item textAlign={{ xs: "center", md: "start" }}>
                <Typography
                    variant={"body1"}
                    className={classNames(styles.text)}>
                    {text}
                </Typography>
            </Grid>
            <Grid item width="100%">
                <img src={image} className={classNames(styles.image)}></img>
            </Grid>
        </Grid>
    );
}
