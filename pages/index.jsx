
import ExploreFilters from '../src/components/explore/ExploreFilters.jsx';
import Featured from '../src/components/featured/Featured.jsx';
import { useState, useEffect } from 'react'
import Trending from '../src/components/trending/Trending.jsx';

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);

  useEffect(() => {
    fetchFeaturedData();
    fetchTrendingData();

    async function fetchFeaturedData() {
      const res = await fetch(`${process.env.apiUrl}/featured`);
      const data = await res.json();
      setFeaturedCards(data)
    }

    async function fetchTrendingData() {
      const res = await fetch(`${process.env.apiUrl}/trending`);
      const data = await res.json();
      setTrendingItems(data.nfts)
      setTrendingFilters(data.filters)
    }
  }, []);

  return (
    <div>
      {featuredCards && < Featured items={featuredCards.nfts} />}
      {trendingItems && <Trending cards={trendingItems} />}
    </div>
  )
}
