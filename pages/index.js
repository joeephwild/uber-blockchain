import Locationselector from "../components/Locationselector";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Confirm from "../components/Confirm";

const style = {
  wrapper: 'relative',
  main: "w-screen h-screen overflow-hidden",
  rideRequest: 'max-w-[400px] absolute top-16 left-9 bg-white'
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      {/* navbar */}
      <Navbar />
      <div className={style.main}>
        {/* map  */}
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          {/* location selector  
          */}
          <Locationselector />
          {/* cofirm ride  
          */}
          <Confirm />
        </div>
      </div>
    </div>
  );
}
