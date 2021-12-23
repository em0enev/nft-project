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
                <Grid item xs={12} sm={7}>
                    <Button
                        disabled={isLive}
                        fullWidth
                        className={classNames(styles.button)}
                        variant="contained"
                        onClick={onBuy}
                        sx={{
                            "&:disabled": {
                                backgroundColor: "rgba(41,41,49)",
                                color: "rgb(134,134,138)",
                            },
                        }}>
                        Buy for {buyAmount} {currency}
                    </Button>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Button
                        disabled={isLive}
                        fullWidth
                        className={classNames(styles.button)}
                        variant="outlined"
                        color={"success"}
                        onClick={onBid}
                        sx={{
                            border: "2px rgba(36, 242, 94) solid",
                            color: "rgba(36, 242, 94)",
                            "&:disabled": {
                                border: "2px rgba(41,41,49) solid",
                                color: "rgb(134,134,138)",
                            },
                        }}>
                        Place bid for {bidAmount} {currency}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
