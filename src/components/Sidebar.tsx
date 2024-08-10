import { Link } from 'react-router-dom';

const navItems = [
  // {
  //   id: 1,
  //   icon: 'home',
  //   label: 'Home',
  //   path: 'home',
  // },
  // {
  //   id: 2,
  //   icon: 'promotion',
  //   label: 'Promotion',
  //   path: 'promotion',
  // },
  // {
  //   id: 3,
  //   icon: 'submit-order',
  //   label: 'Button',
  //   path: 'button',
  // },
  // {
  //   id: 4,
  //   icon: 'question-and-answer',
  //   label: 'Carousel',
  //   path: 'carousel',
  // },
  // {
  //   id: 5,
  //   icon: 'question-and-answer',
  //   label: 'Rectangles',
  //   path: 'rectangles',
  // },
  // {
  //   id: 6,
  //   icon: 'question-and-answer',
  //   label: 'Image-Carousel',
  //   path: 'image-carousel',
  // },
  {
    id: 7,
    icon: 'question-and-answer',
    label: 'Profile-Card',
    path: '/profile-card',
  },
  // {
  //   id: 8,
  //   icon: 'question-and-answer',
  //   label: 'Add to Bag',
  //   path: '/product',
  // },
  // {
  //   id: 9,
  //   icon: 'question-and-answer',
  //   label: 'Mobile Navigation',
  //   path: '/mobile-navigation',
  // },
  // {
  //   id: 10,
  //   icon: 'question-and-answer',
  //   label: 'Hotel Booking',
  //   path: '/hotel-booking',
  // },
  {
    id: 11,
    icon: 'question-and-answer',
    label: 'Shopping List',
    path: '/shopping-list',
  },
  // {
  //   id: 12,
  //   icon: 'question-and-answer',
  //   label: 'Upload Image',
  //   path: '/upload-image',
  // },
  {
    id: 13,
    icon: 'question-and-answer',
    label: 'Music Events',
    path: '/music-events',
  },
  {
    id: 14,
    icon: 'question-and-answer',
    label: 'Products List',
    path: '/products-list',
  },
  {
    id: 16,
    icon: 'question-and-answer',
    label: 'Subcsribe Card',
    path: '/subscribe-card',
  },
  {
    id: 17,
    icon: 'question-and-answer',
    label: 'Image Grid',
    path: '/image-grid',
  },
];

const Sidebar = () => {
  return (
    <div className="h-[99.8%] w-48 bg-gradient-r p-1p animate-slideIn">
      <div className="bg-white dark:bg-black h-[99.8%] animate-slideIn">
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
          <Link key={x.id} to={x.path}>
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
