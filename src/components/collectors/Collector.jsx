import User from "../user/User";
import { Card, Typography, Container } from '@mui/material/';
import styles from "./Collector.module.scss";
import classNames from "classnames";

export default function Collector({ name, nftsCount, avatar, verified, id, number, type }) {
    return (
        <Container disableGutters className={classNames(styles.container)} sx={{ display: "flex" }}>
            <Container disableGutters sx={{ display: "flex", width: "25%" }} className={classNames(styles.numberContainer, type ? styles.lightNumberContainer : "")}>
                <Typography sx={{ fontSize: "2.5rem" }}>{number + 1}</Typography>
            </Container>
            <Container disableGutters className={classNames(styles.userContainer, type ? styles.lightUserContainer : "")} sx={{ display: "flex" }}>
                <User key={id} avatar={avatar} verified={verified} name={name} info={nftsCount + " items"} />
            </Container>
        </Container>
    );
}