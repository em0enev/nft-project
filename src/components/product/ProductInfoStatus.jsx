import { Chip } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductInfoStatus.module.scss"

export default function ProductInfoStatus() {
    return (
        <div className={classNames(styles["product-info-status"])}>
            <Chip label="LIVE" className={classNames(styles.status)} sx={{ color: "black" }} />
        </div>
    )
}