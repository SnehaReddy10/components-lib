import { Link } from 'react-router-dom';

const navItems = [
  {
    icon: 'home',
    label: 'Home',
    path: 'home',
  },
  {
    icon: 'promotion',
    label: 'Promotion',
    path: 'promotion',
  },
  {
    icon: 'submit-order',
    label: 'Button',
    path: 'button',
  },
  {
    icon: 'question-and-answer',
    label: 'Carousel',
    path: 'carousel',
  },
  {
    icon: 'question-and-answer',
    label: 'Rectangles',
    path: 'rectangles',
  },
  {
    icon: 'question-and-answer',
    label: 'Image-Carousel',
    path: 'image-carousel',
  },
  {
    icon: 'question-and-answer',
    label: 'Profile-Card',
    path: '/profile-card',
  },
];

const Sidebar = () => {
  return (
    <div className="h-[99.8%] w-48 bg-gradient-r p-1p">
      <div className="bg-white dark:bg-black h-[99.8%]">
        <div className="bg-gradient-r pb-[4px]">
          <div className="bg-white dark:bg-black flex p-2 items-center gap-2">
            <img
              src={`/assets/icons/sofa.png`}
              className="w-5 h-5 rounded-full"
              alt="sofa"
            />
            <p className="font-mono text-xxs">CHOOSE YOUR COMFORT</p>
          </div>
        </div>{' '}
        {navItems.map((x) => (
          <Link to={x.path}>
            <div className="bg-gradient-r pb-[1px] hover:translate-x-1 hover:-translate-y-1 hover:rounded-sm hover:p-[3px] transition-all ease-in">
              <div className="bg-white dark:bg-black flex p-2 items-center gap-2 dark:hover:bg-slate-900 hover:bg-gray-100">
                <img
                  src={`/assets/icons/${x.icon}.png`}
                  className="w-5 h-5 rounded-full"
                  alt={x.icon}
                />
                <p className="font-mono text-xxs">{x.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
