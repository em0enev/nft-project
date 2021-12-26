import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss";
import { Card, Grid, Typography } from "@mui/material";
import Countdown, { zeroPad } from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
    return (
        <div className={classNames(styles["product-info-timer"])}>
            <Card className={classNames(styles.card)}>
                {timeEnd && (
                    <Grid container direction="column">
                        <Grid
                            item
                            className={classNames(styles["title-container"])}>
                            <Typography
                                className={classNames(styles["title"])}
                                variant="h5">
                                ENDS IN
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            className={classNames(styles["timer-container"])}>
                            <Countdown
                                onComplete={onTimeEnd}
                                daysInHours={true}
                                date={timeEnd}
                                renderer={(props) => (
                                    <div>
                                        {zeroPad(props.formatted.hours)}:
                                        {zeroPad(props.formatted.minutes)}:
                                        {zeroPad(props.formatted.seconds)}
                                    </div>
                                )}
                            />
                        </Grid>
                    </Grid>
                )}
            </Card>
        </div>
    );
}
