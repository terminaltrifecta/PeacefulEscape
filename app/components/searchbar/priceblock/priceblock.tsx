import React, { useState } from "react";
import Link from "next/link";

const Pricecard = ({
  minGuests = 1,
  maxGuests = 10,
  minNights = 1,
  maxNights = 30,
  minPets = 0,
  maxPets = 10,
  basePricePerNight = 200,
  pricePerPet = 50,
  extraGuestChargePerNight = 15,
  guestThresholdForExtraCharge = 5,
}) => {
  const [guests, setGuests] = useState(minGuests);
  const [pets, setPets] = useState(minPets);
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

  const handleIncrementPets = () => {
    if (pets < maxPets) {
      setPets(pets + 1);
    }
  };

  const handleDecrementPets = () => {
    if (pets > minPets) {
      setPets(pets - 1);
    }
  };

  const calculatePartialPrice = () => {
    const extraGuests =
      guests > guestThresholdForExtraCharge
        ? guests - guestThresholdForExtraCharge
        : 0;
    const extraGuestCharge = extraGuests * extraGuestChargePerNight;
    return basePricePerNight + extraGuestCharge;
  };

  function calculatePetPrice() {
    return pets * pricePerPet * nights;
  }

  const calculateBasePrice = () => {
    return (
      calculatePartialPrice() * nights + calculatePetPrice() * nights
    );
  };

  function petNode() {
    if (pets > 0) {
      return <div className="text-xl">Pets: ${calculatePetPrice()}</div>;
    }
  }

  return (
    <div>
      <div className="join-item card 2xl:card-side shadow-2xl bg-primary">
        <div className="card-body">
          <div className="flex w-full justify-center">
            <div className="w-3/4">
              <div className="text-3xl text-center font-extrabold ">
                Base Price: ${calculateBasePrice()}
              </div>
              <hr className="border-base-100" />
              <br />
              {petNode()}
              <div className="text-xl">Cleaning Fee: $100</div>
              <div className="text-xl">Deposit (Refundable): $850</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-3/4 join join-horizontal lg:gap-x-1">
              <button
                className="w-1/12 btn join-item justify-self-start bg-neutral"
                onClick={handleDecrementGuests}
              >
                -
              </button>
              <div
                className="tooltip w-5/6"
                data-tip={`$15 for every guest after ${guestThresholdForExtraCharge} people.`}
              >
                <div className="btn join-item  disabled bg-neutral w-full">
                  {guests} guests
                </div>
              </div>
              <button
                className="btn join-item w-1/12 justify-end bg-neutral"
                onClick={handleIncrementGuests}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-3/4 join join-horizontal lg:gap-x-1">
              <button
                className="btn join-item w-1/12 justify-self-start bg-neutral"
                onClick={handleDecrementNights}
              >
                -
              </button>
              <div
                className="tooltip w-5/6"
                data-tip={`${nights} nights @ $${calculatePartialPrice()} per night.`}
              >
                <div className="btn join-item disabled bg-neutral w-full">
                  {nights} nights
                </div>
              </div>
              <button
                className="btn join-item w-1/12 justify-end bg-neutral"
                onClick={handleIncrementNights}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-3/4 join join-horizontal lg:gap-x-1">
              <button
                className="btn join-item w-1/12 justify-self-start bg-neutral"
                onClick={handleDecrementPets}
              >
                -
              </button>
              <div
                className="tooltip w-5/6"
                data-tip={`${nights} nights @ $${calculatePartialPrice()} per night.`}
              >
                <div className="btn join-item  disabled bg-neutral w-full">
                  {pets} pets
                </div>
              </div>
              <button
                className="btn join-item w-1/12 justify-end bg-neutral"
                onClick={handleIncrementPets}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/about" className="w-3/4 flex">
              <div className="btn join-item w-full extrabold disabled bg-neutral">
                contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricecard;
