import { Chip } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductInfoStatus.module.scss"

export default function ProductInfoStatus() {
    return (
        <div className={classNames(styles["product-info-status"])}>
            <Chip label="LIVE" className={classNames(styles.status)} sx={{
                backgroundColor: "rgb(39,242, 94)",
                color: "black",
                borderRadius: "7px",
                width: "75px",
                fontWeight: "900"
            }} />
        </div>
    )
}