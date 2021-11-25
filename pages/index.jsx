
import ExploreFilters from '../src/components/explore/ExploreFilters.jsx';
import Featured from '../src/components/featured/Featured.jsx';
import Trending from '../src/components/trending/Trending.jsx';
import TopCollectors from '../src/components/collectors/TopCollectors.jsx'
import Auctions from '../src/components/auctions/Auctions.jsx'
import Header from '../src/components/header/Header.jsx';
import How from '../src/components/how/How.jsx'
import Footer from '../src/components/footer/Footer.jsx'
import howComponentData from '../src/data/how-it-works.json'

import { useState, useEffect } from 'react'

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);
  const [timePeriod, setTimePeriod] = useState(0);
  const [topCollectorsFilter, setTopCollectorsFilter] = useState("")
  const [liveAuctionsFilterValue, setLiveAuctionsFilterValue] = useState(0);

  useEffect(() => {
    fetchFeaturedData();
    fetchTrendingData();
    fetchTopCollectorsData();
    fetchLiveAuctionsData();

    async function fetchFeaturedData() {
      const res = await fetch(`${process.env.apiUrl}/featured`);
      const data = await res.json();
      setFeaturedCards(data)
    }

    async function fetchTrendingData() {
      const res = await fetch(`${process.env.apiUrl}/trending`);
      const data = await res.json();
      setTrendingItems(data.nfts)
      setTrendingFilters(data.filters.sort)
    }

    async function fetchTopCollectorsData() {
      const res = await fetch(`${process.env.apiUrl}/top-collectors`);
      const data = await res.json();
      setCollectors(data.users)
      setCollectorFilters(data.filters.sort)
    }

    async function fetchLiveAuctionsData() {
      const res = await fetch(`${process.env.apiUrl}/live-auctions`);
      const data = await res.json();
      setAuctions(data.nfts);
      setAuctionFilters(data.filters.price)
    }
  }, []);

  useEffect(() => {
    async function fetchTrendingFilteredData(path) {
      const res = await fetch(`${process.env.apiUrl}${path}`);
      if (res.status === 200) {
        const data = await res.json();
        setTrendingItems(data.nfts)
      }
    }

    if (timePeriod !== 0) {
      fetchTrendingFilteredData(`/trending?sort=${timePeriod}`);
    }
  }, [timePeriod])

  useEffect(() => {
    async function fetchTopCollectorsFilteredData(path) {
      const res = await fetch(`${process.env.apiUrl}${path}`);
      if (res.status === 200) {
        const data = await res.json();
        setCollectors([...data.users])
      }
    }

    fetchTopCollectorsFilteredData(`/top-collectors?sort=${topCollectorsFilter}`);
  }, [topCollectorsFilter])

  useEffect(() => {
    async function fetchLiveAuctionsFilteredData(path) {
      const res = await fetch(`${process.env.apiUrl}${path}`);
      if (res.status === 200) {
        const data = await res.json();
        setAuctions(data.nfts)
      }
    }

    fetchLiveAuctionsFilteredData(`/live-auctions?price=${liveAuctionsFilterValue}`);
  }, [liveAuctionsFilterValue])

  return (
    <div>
      <Header />
      {featuredCards && < Featured items={featuredCards.nfts} />}
      {trendingItems && trendingFilters && <Trending cards={trendingItems} filters={trendingFilters} setTimePeriod={setTimePeriod} />}
      {collectors && collectorFilters && <TopCollectors collectors={collectors.slice(0, 12)} filters={collectorFilters} setTopCollectorsFilter={setTopCollectorsFilter} />}
      {howComponentData && <How title={howComponentData.title} description={howComponentData.description} items={howComponentData.items} link={howComponentData.link} />}
      {auctions && auctionFilters && <Auctions cards={auctions} filters={auctionFilters} setLiveAuctionsFilterValue={setLiveAuctionsFilterValue} />}
      <Footer />
    </div>
  )
}