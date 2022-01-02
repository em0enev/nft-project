import {
    Card as MUICard,
    CardContent,
    CardMedia,
    Container,
    Box,
    Chip,
} from "@mui/material/";
import Avatar from "../avatar/Avatar";
import classNames from "classnames";
import styles from "./Card.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import millify from "millify";
import Countdown, { zeroPad } from "react-countdown";
import clsx from "clsx";

export default function Card({
    name,
    likes = 0,
    mediaUrl,
    owner,
    price,
    currency,
    timeLeft,
}) {
    return (
        <MUICard
            className={
                timeLeft
                    ? classNames(styles["live-card"], styles["card"])
                    : classNames(styles["card"])
            }>
            <CardContent className={classNames(styles["card-content"])}>
                <Avatar
                    verified={owner.verified}
                    url={owner.avatar.url}
                    size={33}
                />
                <Container
                    disableGutters
                    className={classNames(styles["img-container"])}>
                    <CardMedia
                        component="img"
                        image={mediaUrl}
                        alt="card media"
                        className={classNames(styles["media"])}
                    />
                    {timeLeft && (
                        <Box className={classNames(styles["badge"])}>LIVE</Box>
                    )}
                    {timeLeft && (
                        <Countdown
                            date={timeLeft}
                            daysInHours
                            renderer={(props) => {
                                return (
                                    <div
                                        className={classNames(styles["timer"])}>
                                        {zeroPad(props.formatted.hours)}:
                                        {zeroPad(props.formatted.minutes)}:
                                        {zeroPad(props.formatted.seconds)}
                                    </div>
                                );
                            }}
                        />
                    )}
                </Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item>
                        <Typography className={classNames(styles["title"])}>
                            {name}
                        </Typography>
                        <Typography className={classNames(styles["price"])}>
                            {timeLeft ? "" : "~"}
                            {price} {currency}
                        </Typography>
                    </Grid>
                    <Chip
                        className={classNames(styles["fav-chip"])}
                        variant="outlined"
                        color="success"
                        icon={<FavoriteIcon fontSize="small" />}
                        label={millify(likes)}
                        onClick={() => {}}
                    />
                </Grid>
            </CardContent>
        </MUICard>
    );
}
