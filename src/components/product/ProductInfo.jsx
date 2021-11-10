import classNames from "classnames";
import styles from "./ProductInfo.module.scss"
import ProductInfoTitle from "./ProductInfoTitle.jsx"
import ProductInfoPrice from "./ProductInfoPrice.jsx"
import ProductInfoStatus from "./ProductInfoStatus.jsx"
import ProductInfoLikes from "./ProductInfoLikes.jsx"
import ProductInfoCreator from "./ProductInfoCreator.jsx"
import ProductInfoTimer from "./ProductInfoTimer.jsx"
import { Grid, Stack } from "@mui/material";

export default function ProductInfo({ title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive }) {

    return (
        <div className={classNames(styles["product-info"])}>
            <ProductInfoTitle text={title}></ProductInfoTitle>
            <div className={classNames(styles["price-container"])}>
                <ProductInfoPrice amount={price} currency={currency}></ProductInfoPrice>
                <Stack direction="row" spacing={1} className={classNames(styles.stats)}>
                    {isLive && <ProductInfoStatus></ProductInfoStatus>}
                    <ProductInfoLikes amount={likes}></ProductInfoLikes>
                </Stack>
            </div>
            <div className={classNames(styles["creator-container"])}>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <ProductInfoCreator name={creator.name} avatar={creator.avatar} verified={creator.verified} ></ProductInfoCreator>
                    </Grid>
                    {isLive && <Grid item xs={5}>
                        <ProductInfoTimer onTimeEnd={onTimeEnd} timeEnd={timeEnd}></ProductInfoTimer>
                    </Grid>}
                </Grid>
            </div>
        </div>
    )
}