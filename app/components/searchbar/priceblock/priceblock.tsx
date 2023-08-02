import React, { useState } from "react";

const Pricecard = ({
  minGuests = 1,
  maxGuests = 10,
  minNights = 1,
  maxNights = 30,
  basePricePerNight = 200,
  extraGuestChargePerNight = 15,
  guestThresholdForExtraCharge = 5,
}) => {
  const [guests, setGuests] = useState(minGuests);
  const [nights, setNights] = useState(minNights);

  const handleIncrementGuests = () => {
    if (guests < maxGuests) {
      setGuests(guests + 1);
    }
  };

  const handleDecrementGuests = () => {
    if (guests > minGuests) {
      setGuests(guests - 1);
    }
  };

  const handleIncrementNights = () => {
    if (nights < maxNights) {
      setNights(nights + 1);
    }
  };

  const handleDecrementNights = () => {
    if (nights > minNights) {
      setNights(nights - 1);
    }
  };

  const calculateTotalPrice = () => {
    const extraGuests =
      guests > guestThresholdForExtraCharge
        ? guests - guestThresholdForExtraCharge
        : 0;
    const extraGuestCharge = extraGuests * extraGuestChargePerNight;
    return basePricePerNight * nights + extraGuestCharge;
  };

  const calculatePartialPrice = () => {
    const extraGuests =
      guests > guestThresholdForExtraCharge
        ? guests - guestThresholdForExtraCharge
        : 0;
    const extraGuestCharge = extraGuests * extraGuestChargePerNight;
    return basePricePerNight + extraGuestCharge;
  };

  return (
    <div>
      <div className="join-item card 2xl:card-side shadow-2xl bg-primary">
        <div className="card-body w-full">
          <div className="text-3xl font-extrabold text-center">
            ${calculateTotalPrice()}
          </div>
          <div className="join join-horizontal w-full justify-around">
            <button
              className="btn join-item justify-self-start"
              onClick={handleDecrementGuests}
            >
              -
            </button>
            <div className="tooltip" data-tip={`$15 for every guest after ${guestThresholdForExtraCharge} people.`}>
              <div className="btn join-item disabled">{guests} guests</div>
            </div>
            <button
              className="btn join-item justify-end"
              onClick={handleIncrementGuests}
            >
              +
            </button>
          </div>

          <div className="join join-horizontal w-full justify-around">
            <button
              className="btn join-item justify-self-start"
              onClick={handleDecrementNights}
            >
              -
            </button>
            <div className="tooltip" data-tip={`${nights} nights @ $${calculatePartialPrice()} per night.`}>
              <div className="btn join-item disabled">{nights} nights</div>
            </div>
            <button
              className="btn join-item justify-end"
              onClick={handleIncrementNights}
            >
              +
            </button>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Pricecard;
