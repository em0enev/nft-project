import { Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./Hero.module.scss"

export default function Hero({ text }) {
    return (
        <div className={classNames(styles.hero)}>
            <Typography className={classNames(styles.text)} variant={"h1"} sx={{marginBottom: "100px"}}>{text}</Typography>
        </div>
    )
}