
import ProductActions from '../src/components/product/ProductActions.jsx';

export default function Index() {
  return <ProductActions isLive={true} currency={"ETH"} buyAmount={50} bidAmount={9} />
}
