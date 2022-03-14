import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

const FloorPlan = (props) => {
  return (
    < >
      <Bedroom num={1}/>
      <LivingRoom />
      <Kitchen />
      <Bath size="Half" />
      <Bedroom num={2}/>
      <Bath size="Full" />
      <Bedroom num={3}/>
    </ >
  )
}

export default FloorPlan