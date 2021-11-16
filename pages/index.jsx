
import ExploreFilters from '../src/components/explore/ExploreFilters.jsx';

export default function Index() {
  return <ExploreFilters filters={{"sort":[{"label":"Date (Ascending)","value":1},{"label":"Date (Descending)","value":2},{"label":"Name (Ascending)","value":3},{"label":"Name (Descending)","value":4},{"label":"Price (Ascending)","value":5},{"label":"Price (Descending)","value":6}],"price":[{"label":"0 - 0.01 ETH","value":7},{"label":"0.01 - 0.04 ETH","value":8},{"label":"0.04 - 0.07 ETH","value":9}]}} />
}
