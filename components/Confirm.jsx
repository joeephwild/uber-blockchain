import React from "react";
import RideSelector from "./RideSelector";

const style = {
  confirmButton: `bg-black text-white rounded-lg m-4 py-4 text-center text-xl`,
};

const Confirm = () => {
  const storeTripDetails = async () => {};
  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        <RideSelector />
        <div className={style.confirmButtonContainer}>
          <div
            className={style.confirmButton}
            onClick={() => storeTripDetails()}
          >
            Confirm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
