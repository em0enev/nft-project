import { Chip } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductInfoLikes.module.scss"
import millify from "millify";

export default function ProductInfoLikes({ amount = 0 }) {
    return (
        <div className={classNames(styles["product-info-likes"])} sx={{}}>
            <Chip variant="outlined" label={millify(amount)} className={classNames(styles.likes)}
                sx={{
                    borderRadius: "6px",
                    border: "2px solid",
                    backgroundColor: "rgba(36, 242, 94, 0.1)",
                    color: "#24f25e"
                }} />
        </div>
    )
}