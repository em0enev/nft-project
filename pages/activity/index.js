import activityData from '../../src/data/activity.json'
import activityFilters from '../../src/data/filtersActivity.json'
import Header from '../../src/components/header/Header.jsx'
import Hero from '../../src/components/hero/Hero.jsx'
import ActivityFilters from '../../src/components/activity/ActivityFilters.jsx'
import ActivityList from '../../src/components/activity/ActivityList.jsx'
import Footer from '../../src/components/footer/Footer.jsx'

export default function Activity() {
    return (
        <div>
            <Header />
            <Hero text={"Activity"} />
            <ActivityFilters filters={activityFilters} />
            <ActivityList items={activityData}/>
            <Footer />
        </div>
    )
}