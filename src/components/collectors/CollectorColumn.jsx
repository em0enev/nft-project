import { Card } from "@mui/material/";
import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";
import Collector from "./Collector";

export default function CollectorColumn({ items = [] }) {
    return (
        <Card className={classNames(styles["card"])}>
            {items.map((el, i) => (
                <Collector {...el} type={(i + 1) % 2 ? "" : "light"} />
            ))}
        </Card>
    );
}
