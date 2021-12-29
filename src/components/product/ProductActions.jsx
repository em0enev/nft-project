import { Grid } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductActions.module.scss";
import Button from "@mui/material/Button";

export default function ProductActions({
    isLive,
    currency,
    buyAmount,
    bidAmount,
    onBuy,
    onBid,
}) {
    return (
        <div className={classNames(styles["product-action"])}>
            <Grid container spacing={2}>
                <Grid item item xs={12} sm={7}>
                    <Button
                        disabled={isLive}
                        fullWidth
                        className={classNames(styles["buy-button"])}
                        variant="contained"
                        onClick={onBuy}>
                        Buy for {buyAmount} {currency}
                    </Button>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Button
                        disabled={isLive}
                        fullWidth
                        className={classNames(styles["bid-button"])}
                        variant="outlined"
                        color={"success"}
                        onClick={onBid}>
                        Place bid for {bidAmount} {currency}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
