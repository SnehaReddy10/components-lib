import { useState } from 'react';

const refSizes = {
  S: false,
  M: false,
  L: false,
  X: false,
  XXL: false,
};

export const Product = () => {
  const [sizes, setsizes] = useState({
    S: false,
    M: true,
    L: false,
    X: false,
    XXL: false,
  });

  return (
    <div className="w-full bg-white h-full flex justify-center">
      <div className="flex gap-3 text-[0.55rem] text-black m-10 w-[60%]">
        <div className="flex flex-col gap-1">
          <img
            src="/assets/icons/tshirt-s1.png"
            alt="tshirt-s1"
            className="h-7 w-10 rounded-sm border-2 border-blue-600"
          />
          <img
            src="/assets/icons/tshirt-s2.jpg"
            alt="tshirt-s1"
            className="h-7 w-10 rounded-sm"
          />
          <img
            src="/assets/icons/tshirt-s2.jpg"
            alt="tshirt-s1"
            className="h-7 w-10 rounded-sm"
          />
        </div>
        <div>
          <img
            src="/assets/icons/tshirt.jpg"
            alt="tshirt"
            className="w-[30vw] h-[60vh] rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 my-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-blue-500 font-bold tracking-tighter">
              POLO RALPH
            </h3>

            <h2 className="text-xl font-semibold tracking-tighter">
              Custom Fit Polo Bear Oxford Shirt
            </h2>

            <p className="text-gray-400 font-semibold tracking-tighter">
              Blue polo with a classic cut. Made of smooth and soft cotton.
            </p>
          </div>

          <div className="flex flex-col gap-1 font-serif">
            <div className="flex gap-2">
              <span className="font-bold text-xs">$99.99</span>
              <span className="px-1 font-semibold bg-blue-300 text-blue-500 hover:text-blue-600 rounded-sm">
                -25%
              </span>
            </div>

            <span className="text-gray-400 font-semibold text-[0.55rem] line-through">
              $132.00
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-bold tracking-tighter">CHOOSE SIZE</p>
            <div className="grid grid-cols-5 gap-2 ms-1 me-5">
              {Object.entries(sizes).map(([x, selected]) => (
                <button
                  className={`${
                    selected ? 'bg-black text-white' : ''
                  } p-[0.2rem] text-center rounded-sm font-bold hover:bg-gray-400 transition-all ease-in`}
                  key={x}
                  onClick={() => {
                    setsizes(() => ({ ...refSizes, [x]: true }));
                  }}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 transition-all ease text-gray-200 px-1 py-1 font-semibold tracking-tight rounded-sm">
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};
