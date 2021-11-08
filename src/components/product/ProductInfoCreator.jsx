import classNames from "classnames";
import styles from "./ProductInfoCreator.module.scss"
import { Card, Container, Typography } from "@mui/material";
import User from "../user/User.jsx"

export default function ProductInfoCreator({ name, avatar, verified = false }) {
    return (
        <div className={classNames(styles["product-info-creator"])} sx={{}}>
            <Card>
                <Container disableGutters  sx={{backgroundColor: "#1D193c", padding: "3% 10%"}}>
                    <Typography className={classNames(styles.title)}>Creator</Typography>
                </Container>
                <Container disableGutters className={classNames(styles["user-container"])}>
                    <User avatar={avatar} verified={verified} name={name}></User>
                </Container>
            </Card>
        </div>
    )
}