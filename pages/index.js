import Locationselector from '../components/Locationselector'
import Map from '../components/Map'
import Navbar from '../components/Navbar' 
import Confirm from '../components/Confirm'

const style = {
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      {/* navbar */}
      <Navbar />
      <div className={style.main}>
         {/* map  <Map /> */}
        
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          {/* location selector  
          <Locationselector />*/}
          {/* cofirm ride  
          <Confirm />*/}
        </div>
      </div>
    </div>
  )
}
