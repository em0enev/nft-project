import { Card } from '@mui/material/';
import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";
import Collector from './Collector';

export default function CollectorColumn({ items = [] }) {
    return (
        <Card className={classNames(styles.card)}>
            {items.map((el, i) => {
                return <Collector name={el.name} avatar={el.avatar} key={el.id} verified={el.verified} nftsCount={el.nftsCount} number={i} type={(i + 1) % 2 == 0 ? "light" : ""} />
            })}
        </Card>
    );
}