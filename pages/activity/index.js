import Header from '../../src/components/header/Header.jsx'
import Hero from '../../src/components/hero/Hero.jsx'
import ActivityFilters from '../../src/components/activity/ActivityFilters.jsx'
import ActivityList from '../../src/components/activity/ActivityList.jsx'
import Footer from '../../src/components/footer/Footer.jsx'
import { useEffect, useState } from 'react'

export default function Activity() {
    const [activities, setActivities] = useState();
    const [filters, setFilters] = useState();

    useEffect(() => {
        fetchActivities();

        async function fetchActivities() {
            const res = await fetch(`${process.env.apiUrl}/activities`);
            if (res.status === 200) {
                const data = await res.json();
                setActivities(data.activities);
                setFilters(data.filters);
            }
        }
    }, [])

    return (
        <div>
            <Header />
            <Hero text={"Activity"} />
            {filters && <ActivityFilters filters={filters} />}
            {activities && <ActivityList items={activities} />}
            <Footer />
        </div>
    )
}