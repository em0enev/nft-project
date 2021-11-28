import Header from '../../src/components/header/Header.jsx'
import Footer from '../../src/components/footer/Footer.jsx'
import ExploreTitle from '../../src/components/explore/ExploreTitle.jsx'
import ExploreFilters from '../../src/components/explore/ExploreFilters.jsx'
import Card from '../../src/components/card/Card.jsx'
import { Container, Grid } from '@mui/material'
import classNames from "classnames";
import styles from "./index.module.scss"
import { useEffect, useState } from 'react'

export default function Explore() {
    const [nfts, setNfts] = useState([])
    const [filters, setFilters] = useState()
    const [sortByFilter, setSortByFilter] = useState(0);
    const [priceFilterValue, setPriceFilterValue] = useState(0);
    
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

    useEffect(() => {
        async function fetchExploreData(path) {
            const res = await fetch(`${process.env.apiUrl}${path}`);
            if (res.status === 200) {
                const data = await res.json();
                setNfts(data.nfts)
            }
        }
        if (sortByFilter !== 0 && priceFilterValue !== 0) {
            fetchExploreData(`/explore?sort=${sortByFilter}&price=${priceFilterValue}`)
        }
        else if (sortByFilter !== 0) {
            fetchExploreData(`/explore?sort=${sortByFilter}`);
        } else if (priceFilterValue !== 0) {
            fetchExploreData(`/explore?price=${priceFilterValue}`)
        }
    }, [sortByFilter, priceFilterValue])

    return (
        <div >
            <Header />
            <Container maxWidth="xl" className={classNames(styles['explore-container'])}>
                <Grid container>
                    <Grid item xs={3} >
                        <ExploreTitle text={"Explore"} />
                    </Grid>
                    <Grid item xs={9}>
                        {filters && <ExploreFilters filters={filters} setSortByFilter={setSortByFilter} setPriceFilterValue={setPriceFilterValue} />}
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between" spacing={4} rowSpacing={2} maxWidth="xl" sx={{ marginTop: "60px" }}>
                    {nfts && nfts.map(el => {
                        return (
                            <Grid item xs={3} key={el.id}>
                                <Card name={el.name} price={el.price} currency={el.currency} mediaUrl={el.source.url} user={el.owner} likes={el.likes} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
            <Footer />
        </div >
    )
}