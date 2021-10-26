
import Auctions from '../src/components/auctions/Auctions.jsx';

export default function Index() {
  return <Auctions cards={[{"name":"Clock","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":200,"currency":"BTC","timeLeft":3600000},{"name":"DOGE","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":200,"currency":"BTC","timeLeft":3600000},{"name":"BTC","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":100,"currency":"BTC","timeLeft":3600000},{"name":"Litecoin","user":{"avatarUrl":"images/avatar.png","verified":true},"mediaUrl":"images/nft.jpg","price":300,"currency":"BTC","timeLeft":3600000}]} />
}
