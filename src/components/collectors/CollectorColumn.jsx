import { Card } from '@mui/material/';
import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";
import Collector from './Collector';

export default function CollectorColumn({ items = [] }) {
    return (
        <Card className={classNames(styles.card)}>
            {items.map((el, i) => {
                return <Collector key={el.id} name={el.name} avatar={el.avatar} verified={el.verified} nftsCount={el.nftsCount} number={el.id} type={(i + 1) % 2 === 0 ? "light" : ""} />
            })}
        </Card>
    );
}