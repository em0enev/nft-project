import { useState, useEffect } from 'react';
import dataNfts from '../../../src/data/nfts.json';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../src/components/header/Header.jsx'
import Footer from '../../../src/components/footer/Footer.jsx'
import ProductContainer from '../../../src/components/product/ProductContainer.jsx';


export default function index() {
    // const [nfts, setNfts] = useState([])

    const router = useRouter()
    const { id } = router.query

    // useEffect(() => {
    //     setNfts(dataNfts.map((el) => {
    //         return {
    //             "id": el.id,
    //             "name": el.name,
    //             "user": {
    //                 "avatarUrl": el.owner.avatar.url,
    //                 "verified": el.owner.verified
    //             },
    //             "mediaUrl": el.source.url,
    //             "price": el.price,
    //             "currency": el.currency,
    //             "timeLeft": 3.6e6
    //         }
    //     }))

    // }, [])


    const nft = dataNfts.find(x => {
        return x.id === Number(id)
    })

    console.log(nft)
    return (
        <div>
            <Header></Header>
            {nft && <ProductContainer  source={nft.source} currency={nft.currency} name={nft.name} likes={10} owner={nft.owner} price={nft.price} bids={[]}></ProductContainer>}
            <Footer></Footer>
        </div>
    )
}
