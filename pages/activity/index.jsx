import Header from '../../src/components/header/Header.jsx'
import Hero from '../../src/components/hero/Hero.jsx'
import ActivityFilters from '../../src/components/activity/ActivityFilters.jsx'
import ActivityList from '../../src/components/activity/ActivityList.jsx'
import Footer from '../../src/components/footer/Footer.jsx'
import { useEffect, useState } from 'react'

export default function Activity() {
    const [activities, setActivities] = useState();
    const [filters, setFilters] = useState();
    const [sortByFilter, setSortByFilter] = useState(0);
    const [typeFilter, setTypeFilter] = useState(0);

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

    useEffect(() => {
        async function fetchActivitiesData(path) {
            const res = await fetch(`${process.env.apiUrl}${path}`);
            if (res.status === 200) {
                const data = await res.json();
                setNfts(data.nfts)
            }
        }
        if (sortByFilter !== 0 && typeFilter !== 0) {
            fetchActivitiesData(`/activities?sort=${sortByFilter}&price=${typeFilter}`)
        }
        else if (sortByFilter !== 0) {
            fetchActivitiesData(`/activities?sort=${sortByFilter}`);
        } else if (typeFilter !== 0) {
            fetchActivitiesData(`/activities?price=${typeFilter}`)
        }
    }, [sortByFilter, typeFilter])

    return (
        <div>
            <Header />
            <Hero text={"Activity"} />
            {filters && <ActivityFilters filters={filters} setSortByFilter={setSortByFilter} setTypeFilter={setTypeFilter} />}
            {activities && <ActivityList items={activities} />}
            <Footer />
        </div>
    )
}