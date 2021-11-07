
import { Container } from '@mui/material';
import TopCollectors from '../src/components/collectors/TopCollectors.jsx';
import Header from '../src/components/header/Header.jsx';
import Featured from '../src/components/featured/Featured.jsx';
import Trending from '../src/components/trending/Trending.jsx';
import How from '../src/components/how/How.jsx';
import Auctions from '../src/components/auctions/Auctions.jsx';
import Footer from '../src/components/footer/Footer.jsx';
import { useEffect, useState } from "react";
import dataFeatured from '../src/data/featured.json';
import dataNfts from '../src/data/nfts.json';
import dataTrending from '../src/data/trending.json';
import dataUsers from '../src/data/users.json';
import howItWorkData from '../src/data/how-it-works.json';

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([])
  const [trending, setTrending] = useState([])
  const [users, setUsers] = useState([])
  const [howData, setHowData] = useState(howItWorkData)
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    setFeaturedCards(dataFeatured.map((el, i) => {
      return {
        "id": el.id,
        "name": el.name,
        "price": el.price,
        "image": el.source.url,
        "rows": i === 0 ? 2 : 1,
        "cols": i === 0 ? 3 : 1
      }
    }))
    setTrending(dataTrending.map((el) => {
      return {
        "id": el.id,
        "name": el.name,
        "user": {
          "avatarUrl": el.owner.avatar.url,
          "verified": el.owner.verified
        },
        "mediaUrl": el.source.url,
        "price": el.price,
        "currency": el.currency
      }
    }))

    setUsers(dataUsers.map(el => {
      return {
        "name": el.username,
        "nftsCount": el.nfts.length,
        "avatar": el.avatar.url,
        "verified": el.verified
      }
    }).sort((first, second) => {
      return first.nftsCount < second.nftsCount
    }))

    setNfts(dataNfts.map((el) => {
      return {
        "id": el.id,
        "name": el.name,
        "user": {
          "avatarUrl": el.owner.avatar.url,
          "verified": el.owner.verified
        },
        "mediaUrl": el.source.url,
        "price": el.price,
        "currency": el.currency,
        "timeLeft": 3.6e6
      }
    }))
  }, [])

  console.log(nfts)

  return (
    <Container maxWidth="true" disableGutters sx={{ margin: 0 }}>
      <Header></Header>
      <Featured items={featuredCards}></Featured>
      <Trending cards={trending.slice(0, 4)}></Trending>
      <TopCollectors collectors={users.slice(0, 12)}></TopCollectors>
      <How description={howData.description} title={howData.title} items={howData.items} link={howData.link}></How>
      <Auctions cards={nfts.slice(0, 4)}></Auctions>
      <Footer></Footer>
    </Container>
  )
}
