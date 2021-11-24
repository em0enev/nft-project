import classNames from "classnames";
import styles from "./ProfileCollection.module.scss"
import { Container, Grid, Typography } from '@mui/material/';
import ProfileCollectionFilters from './ProfileCollectionFilters.jsx'
import Card from '../card/Card.jsx'


export default function ProfileCollection({ user, filters, items }) {
    return (
        <div className={classNames(styles['profile-collection'])}>
            <Container >
                <Grid container sx={{ alignItems: "baseline" }}>
                    <Grid item xs={3} >
                        <Typography variant={"h3"}>Collection</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <ProfileCollectionFilters filters={filters} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{ marginTop: "40px" }}>
                    {items.map(el => {
                        return (
                            <Grid item key={el.id} xs={3}>
                                <Card user={user} name={el.name} price={el.price} likes={el.likes} currency={el.currency} mediaUrl={el.source.url} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}