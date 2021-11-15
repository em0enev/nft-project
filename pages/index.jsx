
import ActivityFilters from '../src/components/activity/ActivityFilters.jsx';

export default function Index() {
  return <ActivityFilters filters={{"sort":[{"label":"Name (Ascending)","value":1},{"label":"Name (Descending)","value":2},{"label":"Price (Ascending)","value":4},{"label":"Price (Descending)","value":5}],"type":[{"label":"Liked","value":6},{"label":"Bought","value":7}]}} />
}
