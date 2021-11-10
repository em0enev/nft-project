
import ProductInfo from '../src/components/product/ProductInfo.jsx';

export default function Index() {
  return <ProductInfo title={"John"} creator={{"name":"George","avatar":"https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg","verified":true}} price={20} currency={"ETH"} likes={20} timeEnd={"2022-09-02T20:43:19.149Z"} isLive={true} />
}
