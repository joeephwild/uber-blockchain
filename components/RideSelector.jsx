import React from "react";
import uberx from '../public/assets/uberX.png'
import uberb from '../public/assets/uberBlack.png'
import uberbs from '../public/assets/uberBlackSuv.png'
import uberxl from '../public/assets/uberXL.png'
import ubers from '../public/assets/uberSelect.png'
import Image from "next/image";

const style = {
  title: 'text-lg font-bold'
  }
 
  const carList = [
      {
          name: 'uberx',
          image: uberx,
          priceMultiplier: 1,
      }
  ]

const RideSelector = () => {
  return <div className={style.wrapper}>
        <div className={style.title}>Choose a ride, or swipe up for more</div>
        <div className={style.carList}>
          {carList.map((item, i) => (
            <div>
              <Image src={item.image} width={30} height={30} />
            </div>
          ))}
        </div>
  </div>;
};

export default RideSelector;
