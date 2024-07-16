const soacialLinks = [
  {
    title: 'facebook',
    icon: 'facebook',
  },
  {
    title: 'linkedin',
    icon: 'linkedin',
  },
  {
    title: 'twitter',
    icon: 'twitter',
  },
  {
    title: 'instagram',
    icon: 'instagram',
  },
];

function ProfileCard() {
  return (
    <div className="bg-yellow-100 w-3/4 h-full flex justify-center text-black text-center text-xs">
      <div className="relative flex flex-col gap-5 rounded-3xl shadow-lg shadow-gray-700 w-60 py-5 px-5 bg-white my-20 mx-10">
        {/* <div className="absolute top-0 left-0 h-20 w-full">
          <div className="absolute w-full bg-pink-700 h-20 top-0 left-0"></div>
          <div className="absolute top-[4rem] left-[9.3rem] h-10 w-[30%] bg-white rounded-ss-3xl rounded-se-[4rem]"></div>
          <div className="absolute top-0 left-0 flex w-full">
            <div className="h-20 w-[70%] bg-pink-700 rounded-ss-3xl rounded-es-[3rem] rounded-ee-[5rem]"></div>
            <div className="absolute top-[2.1rem] left-[9.3rem] h-5 w-[20%] bg-white rounded-t-full"></div>
          </div>
        </div> */}
        <div className="flex justify-center">
          <img
            src="assets/icons/woman.png"
            alt="profile"
            className="rounded-full h-14 w-14"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-sans tracking-widest font-bold">Sneha Reddy</h3>
          <h6 className="text-xxs text-slate-300">@snehareddy10</h6>
        </div>
        <div className="flex justify-around mx-6">
          {soacialLinks.map((x) => (
            <img
              key={x.title}
              src={`/assets/icons/${x.icon}.png`}
              className="h-3 w-3"
            />
          ))}
        </div>
        <p className="font-semibold text-balance text-[0.65rem] tracking-tighter">
          I am a full stack developer with around 3 years of experience in
          building scalable and responsive web applications
        </p>

        <div className="mt-3 grid grid-cols-2 gap-3 justify-center text-[0.65rem] tracking-tight font-semibold">
          <button className="px-4 py-1 rounded-full bg-pink-500 hover:bg-pink-600 transition-all ease-in text-white">
            Follow
          </button>
          <button className="px-4 py-1 border-slate-200 text-slate-400 hover:bg-slate-100 hover:border-white transition-all ease-in border-2 rounded-full">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
