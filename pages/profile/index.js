import Header from './../../src/components/header/Header.jsx'
import Footer from './../../src/components/footer/Footer.jsx'
import ProfileHero from './../../src/components/profile/ProfileHero.jsx'
import ProfileUser from './../../src/components/profile/ProfileUser.jsx'
import ProfileCollection from './../../src/components/profile/ProfileCollection.jsx'
import ProfileData from './../../src/data/profile.json'
import ProfileCollectionFiltersData from './../../src/data/profile-collection-filters.json'

export default function Profile() {
    return (
        <div>
            <Header />
            <ProfileHero image={"https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg"}/>
            <ProfileUser name={ProfileData.username} avatar={ProfileData.avatar.url} verified={ProfileData.verified} info={"some info should be here"}/>
            <ProfileCollection filters={ProfileCollectionFiltersData} items={ProfileData.nfts} user={ProfileData}/>
            <Footer />
        </div>
    )
}