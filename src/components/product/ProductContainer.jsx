import { Grid } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductContainer.module.scss"
import ProductImage from './ProductImage.jsx'
import ProductInfo from './ProductInfo.jsx'
import ProductTabs from './ProductTabs.jsx'
import ProductActions from './ProductActions.jsx'
import { useEffect, useState } from "react";
import { parseISO } from "date-fns"


export default function ProductContainer({ name, owner, price, currency, likes, auction_end, details, source, bids }) {
    const [isLive, setIsLive] = useState(false)

    useEffect(() => {
        setIsLive(Date.now() <= parseISO(auction_end))
    }, [])

    return (
        <div className={classNames(styles["product-container"])}>
            <Grid container spacing={10} xs={1} sx={{ maxWidth: "100%" }}>
                <Grid item xs={6}>
                    <ProductImage url={source.url} />
                </Grid>
                <Grid item xs={5}>
                    <ProductInfo timeEnd={auction_end} onTimeEnd={() => { }} isLive={isLive} creator={owner} title={name} currency={currency} likes={likes} price={price} />
                    <ProductTabs bids={bids} text={details} />
                    <ProductActions buyAmount={price} currency={currency} isLive={!isLive} bidAmount={price + 1} onBid={() => { }} onBuy={() => { }} />
                </Grid>
            </Grid>
        </div>
    )
}