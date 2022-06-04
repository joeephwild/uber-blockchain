import React from "react";
import uberx from '../public/assets/uberX.png'
import uberb from '../public/assets/uberBlack.png'
import uberbs from '../public/assets/uberBlackSuv.png'
import uberxl from '../public/assets/uberXL.png'
import ubers from '../public/assets/uberSelect.png'

const style = {
    wrapper: `h-full flex flex-col`,
    title: `text-gray-500 text-center text-xs py-2 border-b`,
    carList: `flex flex-col flex-1 overflow-scroll`,
    car: `flex p-3 m-2 items-center border-2 border-white`,
    selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
    carImage: `h-14`,
    carDetails: `ml-2 flex-1`,
    service: `font-medium`,
    time: `text-xs text-blue-500`,
    priceContainer: `flex items-center`,
    price: `mr-[-0.8rem]`,
  }
 
  const carList = [
      {
          name: 'uberx',
          image: 'uberx',
          priceMultiplier: 1,
      }
  ]

const RideSelector = () => {
  return <div className={style.wrapper}>
        <div className={style.title}>Choose a ride, or swipe up for more</div>
        <div className={style.carList}></div>
  </div>;
};

export default RideSelector;
