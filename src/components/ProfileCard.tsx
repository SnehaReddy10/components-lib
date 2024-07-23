import { Link } from 'react-router-dom';

const soacialLinks = [
  {
    title: 'github',
    icon: 'github',
    link: 'https://github.com/SnehaReddy10',
  },
  {
    title: 'twitter',
    icon: 'twitter',
    link: 'https://x.com/SnehaReddy_02',
  },
  {
    title: 'facebook',
    icon: 'facebook',
    link: 'https://www.linkedin.com/in/sneha-reddy-7294051bb/',
  },
  {
    title: 'linkedin',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/sneha-reddy-7294051bb/',
  },

  {
    title: 'instagram',
    icon: 'instagram',
    link: 'https://github.com/SnehaReddy10',
  },
];

function ProfileCard() {
  return (
    <div className="bg-yellow-100 w-full h-full flex justify-center text-black text-center text-xs">
      <div className="relative flex flex-col gap-5 rounded-3xl shadow-lg shadow-gray-700 w-60 py-3 px-5 bg-white my-20 mx-10">
        <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180 rounded-3xl z-20">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-[9rem]"
            style={{ width: 'calc(150% + 1.3px)' }}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#930f69]"
            ></path>
          </svg>
        </div>
        <div className="wave2 absolute top-0 left-0 overflow-hidden w-full rotate-180 rounded-3xl z-10">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 140"
            preserveAspectRatio="none"
            className="relative block h-[9rem]"
            style={{ width: 'calc(140% + 1px)' }}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#b62c8a]"
            ></path>
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180 wave rounded-3xl">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            className="relative block h-[9rem]"
            style={{ width: 'calc(150% + 1.2px)' }}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#cb58a9]"
            ></path>
          </svg>
        </div>

        <div className="flex justify-center">
          <img
            src="assets/imgs/icon1.png"
            alt="profile"
            className="rounded-full h-16 w-16 z-30 bg-white p-[2px]"
          />
        </div>
        <div className="flex flex-col mt-14">
          <h3 className="font-sans tracking-widest font-bold">Sneha Reddy</h3>
          <h6 className="text-xxs text-slate-300">@snehareddy10</h6>
        </div>
        <div className="flex justify-around mx-6">
          {soacialLinks.map((x) => (
            <Link to={x.link}>
              <img
                key={x.title}
                src={`/assets/icons/${x.icon}.png`}
                className="h-4 w-4 rounded-full"
              />
            </Link>
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
