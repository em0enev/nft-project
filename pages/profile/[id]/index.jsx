import Header from '../../../src/components/header/Header.jsx'
import Footer from '../../../src/components/footer/Footer.jsx'
import ProfileHero from '../../../src/components/profile/ProfileHero.jsx'
import ProfileUser from '../../../src/components/profile/ProfileUser.jsx'
import ProfileCollection from '../../../src/components/profile/ProfileCollection.jsx'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Profile() {
    const [user, setUser] = useState();
    const [filters, setFilters] = useState();
    const [sortByFilterValue, setSortByFilterValue] = useState();
    const [priceRangeFilterValue, setPriceRangeFilterValue] = useState();

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        fetchUserData();

        async function fetchUserData() {
            const res = await fetch(`${process.env.apiUrl}/users/${id}`);
            if (res.status === 200) {
                const data = await res.json();
                setUser(data.user)
                setFilters(data.filters)
            }
        }
    }, [id])

    useEffect(() => {
        async function fetchExploreData(path) {
            const res = await fetch(`${process.env.apiUrl}${path}`);
            if (res.status === 200) {
                const data = await res.json();
                setUser(data.user)
            }
        }
        if (sortByFilterValue !== 0 && priceRangeFilterValue !== 0) {
            fetchExploreData(`/users/${id}?sort=${sortByFilterValue}&price=${priceRangeFilterValue}`)
        }
        else if (sortByFilterValue !== 0) {
            fetchExploreData(`/users/${id}?sort=${sortByFilterValue}`);
        } else if (priceRangeFilterValue !== 0) {
            fetchExploreData(`/users/${id}?price=${priceRangeFilterValue}`)
        }
    }, [sortByFilterValue, priceRangeFilterValue])
    console.log(sortByFilterValue)
    return (
        <div>
            <Header />
            {user && <ProfileHero image={user.avatar.backgroundUrl} />}
            {user && <ProfileUser name={user.username} avatar={user.avatar.url} verified={user.verified} info={user.info} />}
            {user && filters && <ProfileCollection filters={filters} items={user.nfts} user={user} setSortByFilterValue={setSortByFilterValue} setPriceRangeFilterValue={setPriceRangeFilterValue}/>}
            <Footer />
        </div>
    )
}