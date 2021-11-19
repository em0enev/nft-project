import { Card as MUICard, CardContent, CardMedia, Container, Box, Chip } from "@mui/material/"
import Avatar from "../avatar/Avatar";
import classNames from "classnames";
import styles from "./Card.module.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import millify from "millify";
import Countdown, { zeroPad } from 'react-countdown';
import clsx from 'clsx';

export default function Card({ name, likes = 0, mediaUrl, user, price, currency, timeLeft }) {
    return (
        <MUICard className={timeLeft ? clsx(styles.liveCard, styles.card) : classNames(styles.card)} sx={timeLeft ? { backgroundColor: "rgba(36, 242, 94, 0.1)" } : {}}>
            <CardContent>
                <Avatar verified={user.verified} url={user.avatarUrl} size={33} />
                <Container disableGutters className={classNames(styles.imgContainer)}>
                    <CardMedia
                        component="img"
                        image={mediaUrl}
                        alt="card media"
                        className={classNames(styles.media)} />
                    {timeLeft && <Box className={classNames(styles.badge)}>LIVE</Box>}
                    {timeLeft && <Countdown date={Date.now() + timeLeft} renderer={props => <div className={classNames(styles.timer)}>{zeroPad(props.hours)}:{zeroPad(props.minutes)}:{zeroPad(props.seconds)}</div>} />}
                </Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center" >
                    <Grid item>
                        <Typography className={classNames(styles.title)} sx={{fontWeight: "bold", marginBottom: "5px"}}>{name}</Typography>
                        <Typography className={classNames(styles.price)} sx={{fontWeight: "bold"}}>~{price} {currency}</Typography>
                    </Grid>
                    <Chip variant="outlined"
                        color="success"
                        size="small"
                        sx={{ height: "33px", border: "2px solid", fontWeight: "bold", background:"rgba(36, 242, 94, 0.1)" }}
                        icon={<FavoriteIcon />}
                        label={millify(likes)}
                        onClick={() => { }}
                        className={classNames(styles.likes)} />
                </ Grid>
            </CardContent>
        </MUICard>
    );
}