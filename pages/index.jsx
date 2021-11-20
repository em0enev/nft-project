
import ExploreFilters from '../src/components/explore/ExploreFilters.jsx';
import Featured from '../src/components/featured/Featured.jsx';
import Trending from '../src/components/trending/Trending.jsx';
import TopCollectors from '../src/components/collectors/TopCollectors.jsx'
import Auctions from '../src/components/auctions/Auctions.jsx' 
import Header from '../src/components/header/Header.jsx';
import { useState, useEffect } from 'react'

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);

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

  return (
    <div>
      <Header />
      {featuredCards && < Featured items={featuredCards.nfts} />}
      {trendingItems && trendingFilters && <Trending cards={trendingItems} filters={trendingFilters} />}
      {collectors && collectorFilters && <TopCollectors collectors={collectors.slice(0, 12)} filters={collectorFilters} />}
      {auctions && auctionFilters && <Auctions cards={auctions} filters={auctionFilters}/>}
    </div>
  )
}


//TODO: pass trendingFilters to Trending component !