import { Chip } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductInfoStatus.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ProductInfoStatus() {
    return (
        <div className={classNames(styles["product-info-status"])}>
            <Chip
                className={classNames(styles["status"])}
                icon={
                    <FiberManualRecordIcon
                        className={classNames(styles["dot-icon"])}
                        fontSize="small"
                    />
                }
                label="LIVE"
            />
        </div>
    );
}
