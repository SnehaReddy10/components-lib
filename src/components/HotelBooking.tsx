function HotelBooking() {
  return (
    <div className="h-full w-full px-20 py-10 text-black text-[0.65rem] tracking-tighter font-sans">
      <div className="flex w-full bg-white rounded-md p-2">
        <div className="m-4 flex flex-col gap-4 justify-between w-2/5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="checkIn" className="font-semibold">
                Check In
              </label>
              <input
                type="date"
                name="checkIn"
                placeholder="08-10-2024"
                className="bg-gray-200 w-full p-1 rounded-sm text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="checkIn" className="font-semibold">
                Check Out
              </label>
              <input
                type="date"
                name="checkIn"
                placeholder="08-10-2024"
                className="bg-gray-200 w-full p-1 rounded-sm text-gray-500"
              />
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

          <button className="bg-orange-400 text-white px-2 py-1 rounded-2xl">
            Book a room
          </button>
        </div>
        <div className="flex flex-col gap-3 w-3/5">
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
      </div>
    </div>
  );
}

export default HotelBooking;
