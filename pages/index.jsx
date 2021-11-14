
import ProfileCollectionFilters from '../src/components/profile/ProfileCollectionFilters.jsx';

export default function Index() {
  return <ProfileCollectionFilters filters={{"sort":[{"label":"Name (Ascending)","value":1},{"label":"Name (Descending)","value":2},{"label":"Price (Ascending)","value":4},{"label":"Price (Descending)","value":5}],"price":[{"label":"0.3 - 0.5 ETH","value":6},{"label":"0.5 - 2 ETH","value":7},{"label":"2- 3 ETH","value":8}]}} />
}
