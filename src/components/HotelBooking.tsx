import { useState } from 'react';

function HotelBooking() {
  const [booked, setBooked] = useState(false);

  return (
    <div className="relative h-full w-full px-20 py-10 text-black text-[0.65rem] tracking-tighter font-sans">
      <div className="flex w-full bg-white rounded-md p-2">
        <div
          className={`m-4 flex flex-col gap-4 justify-between w-2/5 ${
            booked ? 'transition-all ease delay-100 animate-fadeOut' : ''
          }`}
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <label htmlFor="checkIn" className="font-semibold">
                Check In
              </label>
              <div className="relative">
                <p className="absolute z-10 text-gray-500 p-1">
                  08 October, 2024
                </p>
                <input
                  type="date"
                  name="checkIn"
                  placeholder="08 October, 2024"
                  className="absolute bg-gray-200 w-full p-1 rounded-sm text-transparent dateInput"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="checkIn" className="font-semibold">
                Check Out
              </label>
              <div className="relative">
                <p className="absolute z-10 text-gray-500 p-1">
                  08 October, 2024
                </p>
                <input
                  type="date"
                  name="checkIn"
                  placeholder="08 October, 2024"
                  className="absolute bg-gray-200 w-full p-1 rounded-sm text-gray-200 dateInput"
                />
              </div>
            </div>

            <div className="flex flex-col-2 gap-4 justify-between">
              <div className="flex flex-1 flex-col gap-1">
                <label htmlFor="adults" className="font-semibold">
                  Adults
                </label>
                <input
                  type="number"
                  name="adults"
                  placeholder="1"
                  className="bg-gray-200 w-full p-1 rounded-sm text-gray-500"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label htmlFor="children" className="font-semibold">
                  Children
                </label>
                <input
                  type="number"
                  name="children"
                  placeholder="1"
                  className="bg-gray-200 w-full p-1 rounded-sm text-gray-500"
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => setBooked((b) => !b)}
            className="bg-orange-400 hover:bg-orange-500 transition ease text-white px-2 py-1 rounded-2xl"
          >
            Book a room
          </button>
        </div>
        <div
          className={`flex flex-col gap-3 w-3/5 ${
            booked ? 'transition-all ease delay-100 animate-fadeOut' : ''
          }`}
        >
          <img src="/assets/imgs/hotel-room1.jpg" alt="hotel-room" />
          <div className="flex gap-2">
            <img
              src="/assets/imgs/hotel-1.jpg"
              alt="hotel-room"
              className="w-40 h-20"
            />
            <img
              src="/assets/imgs/hotel-2.jpg"
              alt="hotel-room"
              className="w-40 h-20"
            />
            <img
              src="/assets/imgs/hotel-3.jpg"
              alt="hotel-room"
              className="w-40 h-20"
            />
          </div>
        </div>
        <div
          className={`${
            booked
              ? 'flex transition-all ease animate-fadeIn delay-300 '
              : 'hidden'
          } absolute top-1/2`}
        >
          <button className="bg-orange-400 hover:bg-orange-500 transition ease text-white px-2 py-1 rounded-2xl">
            Booking Successful
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelBooking;
