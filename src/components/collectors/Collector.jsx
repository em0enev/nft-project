import User from "../user/User";
import { Typography, Grid } from "@mui/material/";
import styles from "./Collector.module.scss";
import classNames from "classnames";

export default function Collector({
    name,
    nftsCount,
    avatar,
    verified,
    id,
    number,
    type,
}) {
    return (
        <Grid container>
            <Grid
                item
                className={classNames(
                    styles["numberContainer"],
                    type ? styles["lightNumberContainer"] : ""
                )}>
                <Typography className={classNames(styles["text"])}>
                    {number + 1}
                </Typography>
            </Grid>
            <Grid
                item
                className={classNames(
                    styles["userContainer"],
                    type ? styles["lightUserContainer"] : ""
                )}>
                <User
                    key={id}
                    avatar={avatar.url}
                    verified={verified}
                    name={name}
                    info={nftsCount + " items"}
                />
            </Grid>
        </Grid>
    );
}
