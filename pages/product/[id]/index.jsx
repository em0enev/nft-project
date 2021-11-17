import { useState, useEffect } from 'react';
import dataNfts from '../../../src/data/nfts.json';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../src/components/header/Header.jsx'
import Footer from '../../../src/components/footer/Footer.jsx'
import ProductContainer from '../../../src/components/product/ProductContainer.jsx';


export default function index() {
    const router = useRouter()
    const { id } = router.query

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
