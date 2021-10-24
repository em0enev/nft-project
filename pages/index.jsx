
import Trending from '../src/components/trending/Trending.jsx';

export default function Index() {
  return <Trending cards={[{"name":"Clock","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":200,"currency":"BTC"},{"name":"DOGE","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":200,"currency":"BTC"},{"name":"BTC","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":100,"currency":"BTC"},{"name":"Litecoin","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":300,"currency":"BTC"}]} />
}
