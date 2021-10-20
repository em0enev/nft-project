
import CardComponent from '../src/components/card/CardComponent.jsx';

export default function Index() {
  return <CardComponent user={{ avatarUrl: undefined, verified: true }} likes={13125} name={"Some name"} price={"12.3"} currency={"ETH"} />
}
