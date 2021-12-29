import classNames from "classnames";
import styles from "./ProductInfoCreator.module.scss";
import { Card, Typography, Grid } from "@mui/material";
import User from "../user/User.jsx";

export default function ProductInfoCreator({ name, avatar, verified = false }) {
    return (
        <div className={classNames(styles["product-info-creator"])}>
            <Card className={classNames(styles["card"])}>
                <Grid container>
                    <Grid
                        item
                        className={classNames(styles["title-container"])}>
                        <Typography
                            className={classNames(styles["title"])}
                            color="textSecondary">
                            CREATOR
                        </Typography>
                    </Grid>
                    <Grid item className={classNames(styles["user-container"])}>
                        <User
                            avatar={avatar}
                            verified={verified}
                            name={name}
                            size={39}></User>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}
