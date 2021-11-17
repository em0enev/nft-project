import Header from './../../src/components/header/Header.jsx'
import Footer from './../../src/components/footer/Footer.jsx'
import ExploreTitle from './../../src/components/explore/ExploreTitle.jsx'
import ExploreFilters from './../../src/components/explore/ExploreFilters.jsx'
import Card from './../../src/components/card/Card.jsx'
import nftsData from './../../src/data/nfts.json'
import filtersData from './../../src/data/filtersExplore.json'
import { Container, Grid } from '@mui/material'
import classNames from "classnames";
import styles from "./index.module.scss"

export default function Explore() {
    return (
        <div >
            <Header />
            <Container maxWidth="xl" className={classNames(styles['explore-container'])}>
                <Grid container>
                    <Grid item xs={3} >
                        <ExploreTitle text={"Explore"} />
                    </Grid>
                    <Grid item xs={9}>
                        <ExploreFilters filters={filtersData} />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={2} sx={{marginTop: "60px"}}>
                    {nftsData.map(el => {
                        const user = nftsData.map(el => {
                            return {
                                "avatarUrl" : el.owner.avatar.url,
                                "verified" : false
                            }
                        })
                        return (
                            <Grid item xs={3}>
                                <Card name={el.name} price={el.price} currency={el.currency} mediaUrl={el.source.url} user={user}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
            <Footer />
        </div >
    )
}