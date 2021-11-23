import Header from '../../src/components/header/Header.jsx'
import Footer from '../../src/components/footer/Footer.jsx'
import ExploreTitle from '../../src/components/explore/ExploreTitle.jsx'
import ExploreFilters from '../../src/components/explore/ExploreFilters.jsx'
import Card from '../../src/components/card/Card.jsx'
import filtersData from '../../src/data/filtersExplore.json'
import { Container, Grid } from '@mui/material'
import classNames from "classnames";
import styles from "./index.module.scss"
import { useEffect, useState } from 'react'

export default function Explore() {
    const [nfts, setNfts] = useState([])
    const [filters, setFilters] = useState()

    useEffect(() => {
        fetchExploreData();

        async function fetchExploreData() {
            const res = await fetch(`${process.env.apiUrl}/explore`);
            if (res.status === 200) {
                const data = await res.json();
                setNfts(data.nfts)
                setFilters(data.filters)
            }
        }
    }, [])

    return (
        <div >
            <Header />
            <Container maxWidth="xl" className={classNames(styles['explore-container'])}>
                <Grid container>
                    <Grid item xs={3} >
                        <ExploreTitle text={"Explore"} />
                    </Grid>
                    <Grid item xs={9}>
                       {filters &&  <ExploreFilters filters={filters} />}
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between" spacing={4} rowSpacing={2} maxWidth="xl" sx={{ marginTop: "60px" }}>
                    {nfts && nfts.map(el => {
                        const user = nfts.map(el => {
                            return {
                                "avatarUrl": el.owner.avatar.url,
                                "verified": false
                            }
                        })
                        return (
                            <Grid item xs={3} key={el.id}>
                                <Card name={el.name} price={el.price} currency={el.currency} mediaUrl={el.source.url} user={user} likes={el.likes} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
            <Footer />
        </div >
    )
}