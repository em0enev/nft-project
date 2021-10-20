import { Card as MaterialCard } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from "../avatar/Avatar";
import classNames from "classnames";
import styles from "./Card.module.scss"
import Chip from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import millify from "millify";

export default function Card({ name, likes = 0, mediaUrl, user, price, currency }) {
    return (
        <div sx={{  }} className={classNames(styles.card)}>
            <CardContent>
                <Avatar verified={user.verified} url={user.avatarUrl} size={30} />
                <CardMedia
                    component="img"
                    image={mediaUrl}
                    alt="card media"
                    className={classNames(styles.media)}
                />
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography className={classNames(styles.title)}>{name}</Typography>
                        <Typography className={classNames(styles.price)}>~{price} {currency}</Typography>
                    </Grid>

                    <Chip variant="outlined"
                        color="success"
                        size="small"
                        icon={<FavoriteIcon />}
                        label={millify(likes)}
                        onClick={() => { }}
                        className={classNames(styles.likes)} />
                </ Grid>
            </CardContent>
        </div>
    );
}