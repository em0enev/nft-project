import { Grid, Button, Typography } from "@mui/material/";
import HowStep from "./HowStep.jsx";
import styles from "./How.module.scss";
import classNames from "classnames";
import { makeStyles } from "@mui/styles";
import theme from "../../theme.js";

const useStyles = makeStyles(() => ({
    "grid-container-center": {
        [theme.breakpoints.down("lg")]: {
            justifyContent: "center",
        },
    },
    "text-container-center": {
        [theme.breakpoints.down("lg")]: {
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "20px",
        },
    },
    "step-container-center": {
        [theme.breakpoints.down("lg")]: {
            justifyContent: "center",
        },
    },
}));

export default function How({ description, title, items = [], link }) {
    const classes = useStyles();

    return (
        <div className={classNames(styles.divWrapper)}>
            <Grid
                container
                className={classNames(
                    styles["grid-container"],
                    classes["grid-container-center"]
                )}
                maxWidth="xl">
                <Grid
                    item
                    container
                    className={classNames(
                        styles["text-container"],
                        classes["text-container-center"]
                    )}
                    md={12}
                    lg={5}>
                    <Typography variant="h1">{title}</Typography>
                    <Typography
                        color="textSecondary"
                        className={classNames(styles.description)}>
                        {description}
                    </Typography>
                    <Button
                        href={link}
                        variant="contained"
                        className={classNames(styles["learn-more-btn"])}>
                        Learn more
                    </Button>
                </Grid>
                <Grid
                    item
                    className={classNames(
                        styles["step-container"],
                        classes["step-container-center"]
                    )}>
                    {items.map((el, i) => {
                        return (
                            <HowStep
                                key={i}
                                number={i + 1}
                                title={el.title}
                                description={el.description}
                            />
                        );
                    })}
                </Grid>
            </Grid>
        </div>
    );
}
