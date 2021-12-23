import { Card, Typography, Container, Grid } from "@mui/material/";
import styles from "./HowStep.module.scss";
import classNames from "classnames";

export default function HowStep({ number, title, description }) {
    return (
        <Card className={classNames(styles.card)}>
            <Grid container>
                <Grid item className={classNames(styles.numberContainer)}>
                    <Typography>{number}</Typography>
                </Grid>
                <Grid item className={classNames(styles.infoContainer)}>
                    <Typography variant={"h5"}>
                        {title.toUpperCase()}
                    </Typography>
                    <Typography color="textSecondary">{description}</Typography>
                </Grid>
            </Grid>
        </Card>
    );
}
