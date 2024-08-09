function SubscribeCard() {
  return (
    <div className="relative flex w-full justify-center items-center h-screen text-white">
      <div className="bg-gray-800 flex z-20 w-max h-max rounded-xl py-4 px-6 gap-6">
        <div>
          <img
            src="/assets/imgs/hotel-1.jpg"
            alt="hotel"
            className="h-full rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-wrap">
            Unlock the world: Your passport is endless adventure!
          </h2>
          <p>
            Join now for exclusive travel perks, insider tips and wonderful
            experiences. Let your crazy-you lead the way!.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-gray-600 p-2 flex-1 rounded-s-lg"
            />
            <button className="p-2 rounded-e-lg bg-orange-300 hover:bg-orange-400 hover:text-white transition-all ease-in text-black font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-4 mt-8 w-full h-max bg-orange-300 rounded-xl z-10"></div>
    </div>
  );
}

export default SubscribeCard;
