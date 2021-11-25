import classNames from "classnames";
import styles from "./ProfileCollection.module.scss"
import { Container, Grid, Typography } from '@mui/material/';
import ProfileCollectionFilters from './ProfileCollectionFilters.jsx'
import Card from '../card/Card.jsx'


export default function ProfileCollection({ user, filters, items, setSortByFilterValue, setPriceRangeFilterValue }) {
    return (
        <div className={classNames(styles['profile-collection'])}>
            <Container maxWidth="xl">
                <Grid container sx={{ alignItems: "baseline" }}>
                    <Grid item xs={3} >
                        <Typography variant={"h2"}>Collection</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <ProfileCollectionFilters filters={filters} setSortByFilterValue={setSortByFilterValue} setPriceRangeFilterValue={setPriceRangeFilterValue} />
                    </Grid>
                </Grid>
                <Grid container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center" spacing={2} sx={{ marginTop: "40px" }}>
                    {items.map(el => {
                        return (
                            <Grid item key={el.id} >
                                <Card user={user} name={el.name} price={el.price} likes={el.likes} currency={el.currency} mediaUrl={el.source.url} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}