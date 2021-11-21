import { Container, Grid, Button, Typography } from "@mui/material/";
import HowStep from "./HowStep.jsx";
import styles from "./How.module.scss";
import classNames from "classnames";

export default function How({ description, title, items = [], link }) {
    return (
        <div className={classNames(styles.divWrapper)}>
            <Grid container className={classNames(styles['grid-container'])} maxWidth="xl">
                <Grid item container
                    className={classNames(styles['text-container'])}
                    xs={4}>
                    <Typography variant="h1">{title}</Typography>
                    <Typography color="textSecondary" className={classNames(styles.description)}>{description}</Typography>
                    <Button href={link} variant="contained" sx={{ backgroundColor: "white", color: "rgb(78,36, 242)" }}>Learn more</Button>
                </Grid>
                <Grid item
                    className={classNames(styles['step-container'])}>
                    {items.map((el, i) => {
                        return <HowStep key={i} number={i + 1} title={el.title} description={el.description} />
                    })}
                </Grid>
            </Grid>
        </div>
    );
}