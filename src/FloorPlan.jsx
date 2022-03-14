import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

const FloorPlan = (props) => {
  return (
    < >
      <Bedroom num={1}/>
      <Kitchen />
      <Bath />
      <Bedroom num={2}/>
      <LivingRoom />
      <Bath />
      <Bedroom num={3}/>
    </>
  )
}

export default FloorPlan