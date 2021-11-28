import { Card, Typography, Container, Grid } from '@mui/material/';
import styles from "./HowStep.module.scss";
import classNames from "classnames";

export default function HowStep({ number, title, description }) {
    return (
        <Card className={classNames(styles.card)}>
            <Container sx={{ width: "35%", display: "flex" }} className={classNames(styles.numberContainer)}>
                <Typography sx={{ fontSize: "100px" }} fontWeight="bold">{number}</Typography>
            </Container>
            <Container sx={{ display: "grid" }} className={classNames(styles.infoContainer)}>
                <Typography variant={"h5"} >{title.toUpperCase()}</Typography>
                <Typography color="textSecondary" sx={{ opacity: "0.7" }}>{description}</Typography>
            </Container>
        </Card>
    )
}

