import { Grid } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductContainer.module.scss";
import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";
import ProductTabs from "./ProductTabs.jsx";
import ProductActions from "./ProductActions.jsx";
import { useEffect, useState } from "react";
import { parseISO } from "date-fns";

export default function ProductContainer({
    name,
    owner,
    price,
    currency,
    likes,
    auction_end,
    details,
    source,
    bids,
}) {
    const [isLive, setIsLive] = useState(false);
    useEffect(() => {
        setIsLive(Date.now() <= parseISO(auction_end));
    }, []);

    useEffect(() => {
        bids.sort((a, b) => {
            return a.amount - b.amount;
        });
    }, [bids]);

    return (
        <div className={classNames(styles["product-container"])}>
            <Grid
                container
                className={classNames(styles["grid-container"])}
                justifyContent={{ xs: "center", lg: "space-between" }}
                paddingX={{ xs: "10px", md: "0" }}
                maxWidth="xl">
                <Grid item xs={12} md={6}>
                    <ProductImage url={source.url} />
                </Grid>
                <Grid
                    item
                    className={classNames(styles["info-container"])}
                    xs={12}
                    md={6}>
                    <ProductInfo
                        timeEnd={auction_end}
                        onTimeEnd={() => {}}
                        isLive={isLive}
                        creator={owner}
                        title={name}
                        currency={currency}
                        likes={likes}
                        price={price}
                    />
                    <ProductTabs bids={bids} text={details} />
                    <ProductActions
                        buyAmount={price}
                        currency={currency}
                        isLive={!isLive}
                        bidAmount={
                            bids.length > 0
                                ? bids[bids.length - 1].amount + 0.1
                                : 0.1
                        }
                        onBid={() => {}}
                        onBuy={() => {}}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
