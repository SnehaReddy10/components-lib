const navItems = [
  {
    title: 'home',
    img: 'home-outline',
  },
  {
    title: 'chart',
    img: 'line-chart',
  },
  {
    title: 'message',
    img: 'email',
  },
  {
    title: 'profile',
    img: 'user',
  },
];

const options = [
  {
    title: 'Personal Data',
    img: 'user-fill',
  },
  {
    title: 'Messages',
    img: 'email-fill',
  },
  {
    title: 'Notifications',
    img: 'bell',
  },
  {
    title: 'Location',
    img: 'pin',
  },
  {
    title: 'Community',
    img: 'group-users',
  },
];

const moreOptions = [
  {
    title: 'FAQs',
    img: 'help-fill',
  },
  {
    title: 'Settings',
    img: 'settings',
  },
];

function MobileNavigation() {
  return (
    <div className="flex flex-col justify-between bg-white h-screen w-full text-black text-[0.65rem]">
      <div>
        <div className="flex gap-3 mx-3 my-5">
          <img
            src="/assets/icons/woman.png"
            alt="profile"
            className="h-10 w-10 rounded-md"
          />
          <div className="flex flex-col gap-1">
            <p className="font-bold">Sneha Reddy</p>
            <p className="text-gray-500 font-semibold">Full Stack Developer</p>
          </div>
        </div>
        <p className="w-full h-[1px] bg-gray-300 my-4"></p>

        <div className="my-6 flex flex-col gap-2 mx-3">
          {options.map((x) => (
            <div className="flex justify-between">
              <div className="flex gap-3 p-1">
                <img
                  src={`/assets/icons/${x.img}.png`}
                  alt={x.title}
                  className="bg-gray-200 rounded-sm h-6 w-6 p-1"
                />
                <p className="font-bold">{x.title}</p>
              </div>
              <img
                src="/assets/icons/right-arrow.png"
                alt="right-arrow"
                className="end-0 h-[0.4rem] w-[0.4rem]"
              />
            </div>
          ))}
        </div>
        <p className="w-full h-[1px] bg-gray-300 my-4"></p>

        <div className="my-6 flex flex-col gap-2 mx-3">
          {moreOptions.map((x) => (
            <div className="flex justify-between">
              <div className="flex gap-3 p-1">
                <img
                  src={`/assets/icons/${x.img}.png`}
                  alt={x.title}
                  className="bg-gray-200 rounded-sm h-6 w-6 p-1"
                />
                <p className="font-bold">{x.title}</p>
              </div>
              <img
                src="/assets/icons/right-arrow.png"
                alt="right-arrow"
                className="end-0 h-[0.4rem] w-[0.4rem]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-around bottom-2 my-4">
        {navItems.map((x) => (
          <img src={`/assets/icons/${x.img}.png`} className="h-4 w-4"></img>
        ))}
      </div>
    </div>
  );
}

export default MobileNavigation;
