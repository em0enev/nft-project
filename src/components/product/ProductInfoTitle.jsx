import { Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductInfoTitle.module.scss";

export default function ProductInfoTitle({ text }) {
    return (
        <div className={classNames(styles["product-info-title-container"])}>
            <Typography variant={"h1"} className={classNames(styles["title"])}>
                {text}
            </Typography>
        </div>
    );
}
