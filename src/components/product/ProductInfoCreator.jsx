import classNames from "classnames";
import styles from "./ProductInfoCreator.module.scss"
import { Card, Container, Typography } from "@mui/material";
import User from "../user/User.jsx"

export default function ProductInfoCreator({ name, avatar, verified = false }) {

    return (
        <div className={classNames(styles["product-info-creator"])} sx={{}}>
            <Card className={classNames(styles.card)}>
                <Container disableGutters className={classNames(styles["title-container"])} sx={{ backgroundColor: "#1D193c", padding: "3% 10%", display: "flex" }}>
                    <Typography className={classNames(styles.title)} color="textSecondary">CREATOR</Typography>
                </Container>
                <Container disableGutters className={classNames(styles["user-container"])} sx={{ display: "flex" }}>
                    <User  avatar={avatar} verified={verified} name={name} ></User>
                </Container>
            </Card>
        </div>
    )
}
