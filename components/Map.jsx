import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'


const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = (process.env.mapbox_key)

const Map = () => {


  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/josephweb/cl3zg581z000114o51w32qnct',
      

      center: [-99.29011, 39.39172],
      zoom: 3,
    })

  }, [])

  

  return <div className={style.wrapper} id='map' />
}

export default Map