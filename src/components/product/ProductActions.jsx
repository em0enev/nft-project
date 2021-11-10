import { Grid } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductActions.module.scss"
import Button from '@mui/material/Button';

export default function ProductAction({ isLive, currency, buyAmount, bidAmount, onBuy, onBid }) {
    return (
        <div className={classNames(styles["product-action"])}>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    <Button disabled={isLive} className={classNames(styles.button)} variant="contained" onClick={onBuy}>Buy for {buyAmount} {currency}</Button>
                </Grid>
                <Grid item xs={5}>
                    <Button disabled={isLive} className={classNames(styles.button)} variant="outlined" color={"success"} sx={{ color: "rgba(36, 242, 94)", borderColor: "rgba(36, 242, 94)" }} onClick={onBid}>Place bid for {bidAmount} {currency}</Button>
                </Grid>
            </Grid>
        </div>
    )
}