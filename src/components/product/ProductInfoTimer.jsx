import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss"
import { Card, Container, Typography } from "@mui/material";
import Countdown, { zeroPad } from 'react-countdown';

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
    return (
        <div className={classNames(styles["product-info-timer"])}>
            <Card>
                <Container disableGutters className={classNames(styles["title-container"], timeEnd ? styles.active : "")} sx={{ padding: "3% 10%", display: "flex", justifyContent: "center" }}>
                    <Typography className={classNames(styles.title)} variant="h5">ends in</Typography>
                </Container>
                <Container disableGutters className={classNames(styles.timer, timeEnd ? styles.active : styles.timer)} sx={{ padding: "3% 10%;", display: "flex", justifyContent: "center" }}>
                    {timeEnd && <Countdown
                        onComplete={onTimeEnd}
                        date={Date.now()} // add timeleft
                        renderer={props => <div>{zeroPad(props.hours)}:{zeroPad(props.minutes)}:{zeroPad(props.seconds)}</div>} />}
                </Container>
            </Card>
        </div >
    )
}