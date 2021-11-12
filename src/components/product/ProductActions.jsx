import { Grid } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductActions.module.scss"
import Button from '@mui/material/Button';

export default function ProductActions({ isLive, currency, buyAmount, bidAmount, onBuy, onBid }) {
    return (
        <div className={classNames(styles["product-action"])}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Button disabled={isLive} fullWidth className={classNames(styles.button)} variant="contained" onClick={onBuy} disabled={isLive}>Buy for {buyAmount} {currency}</Button>
                </Grid>
                <Grid item xs={5}>
                    <Button disabled={isLive} fullWidth className={classNames(styles.button)} variant="outlined" color={"success"} sx={{ color: "rgba(36, 242, 94)", borderColor: "rgba(36, 242, 94)" }} onClick={onBid}>Place bid for {bidAmount} {currency}</Button>
                </Grid>
            </Grid>
        </div>
    )
}