
import ExploreFilters from '../src/components/explore/ExploreFilters.jsx';
import Featured from '../src/components/featured/Featured.jsx';
import { useState, useEffect } from 'react'

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState(null);

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const res = await fetch(`${process.env.apiUrl}/featured`);
      const data = await res.json();
      setFeaturedCards(data.nfts)
    }
  }, []);

  return (
    <div>
      {featuredCards && < Featured items={featuredCards} />}
    </div>
  )

}
