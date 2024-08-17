import { useState } from 'react';
import { IoStar } from 'react-icons/io5';

function FlipCard({ item }: any) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((c) => !c);
  return (
    <div
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
      className="p-2 w-44 h-32 sm:w-32 sm:h-44 flex justify-center items-center text-xs bg-[#608291] text-white shadow-lg shadow-gray-800 rounded-lg hover:animate-flip"
    >
      <div className="flex flex-col gap-2 text-[0.65rem] text-center justify-center ">
        <h4 className={`font-bold uppercase ${!flipped ? 'flex' : 'hidden'}`}>
          {item.feature}
        </h4>
        <p
          className={`text-pretty text-[0.55rem] ${
            flipped ? 'flex animate-flipText' : 'hidden'
          }`}
        >
          {item.description}
        </p>
        <div className={`${flipped ? 'flex justify-center' : 'hidden'}`}>
          <p className={`flex gap-1 justify-center`}>
            {[1, 2, 3, 5, 6].map(() => (
              <IoStar size={15} fill="yellow" />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
