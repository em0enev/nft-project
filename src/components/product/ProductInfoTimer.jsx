import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss"
import { Card, Container, Typography } from "@mui/material";
import Countdown, { zeroPad } from 'react-countdown';

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
    return (
        <div className={classNames(styles["product-info-timer"])}>
            <Card className={classNames(styles.card)}>
                <Container disableGutters className={classNames(styles["title-container"], timeEnd ? styles.active : "")} sx={{ padding: "3% 10%", display: "flex", justifyContent: "center" }}>
                    <Typography className={classNames(styles.title)} variant="h5">ENDS IN</Typography>
                </Container>
                <div className={classNames(styles.timer, timeEnd ? styles.active : "")}>
                    {timeEnd && <Countdown
                        onComplete={onTimeEnd}
                        date={Date.now()} // add timeleft
                        renderer={props => <div>{zeroPad(props.hours)}: {zeroPad(props.minutes)}: {zeroPad(props.seconds)}</div>} />}
                </div>
            </Card>
        </div >
    )
}

