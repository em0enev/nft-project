import { Chip } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductInfoLikes.module.scss";
import millify from "millify";

export default function ProductInfoLikes({ amount = 0 }) {
    return (
        <div className={classNames(styles["product-info-likes"])}>
            <Chip
                variant="outlined"
                label={millify(amount)}
                className={classNames(styles["likes"])}
            />
        </div>
    );
}
