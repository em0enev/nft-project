import { Chip } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductInfoLikes.module.scss";
import millify from "millify";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductInfoLikes({ amount = 0 }) {
    return (
        <div className={classNames(styles["product-info-likes"])}>
            <Chip
                variant="outlined"
                className={classNames(styles["likes"])}
                icon={
                    <FavoriteIcon
                        className={classNames(styles["fav-icon"])}
                        fontSize="small"
                    />
                }
                label={millify(amount)}
            />
        </div>
    );
}
