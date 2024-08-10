import { Minus, Plus, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    imageUrl: 'face-cream-1',
    name: 'Hydrating face cream',
    price: 13,
    quantity: 1,
  },
  {
    id: 2,
    imageUrl: 'face-serum-1',
    name: 'Hydrating face serum',
    price: 17,
    quantity: 1,
  },
  {
    id: 3,
    imageUrl: 'lip-balm-1',
    name: 'Hydrating lip balm',
    price: 23,
    quantity: 1,
  },
  {
    id: 4,
    imageUrl: 'face-serum-2',
    name: 'Brightening face serum',
    price: 56,
    quantity: 1,
  },
];

const ShoppingList = () => {
  const [productsUpdated, setProductsUpdated] = useState(products);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);
  let price: number = 0;

  useEffect(() => {
    price = 0;
    productsUpdated.map((x) => (price = price + x.price * x.quantity));
    setTotalPrice(price);
    setTax(price * (2 / 100));
    setShipping(price * (8 / 100));
  }, [productsUpdated]);

  return (
    <div className="relative flex max-md:flex-col items-center justify-center py-10 text-[0.55rem] w-full h-screen">
      <div className="absolute top-0 left-0 w-full blur-sm h-full bg-cover bg-no-repeat bg-[url('/assets/imgs/products-1.png')]"></div>
      <div className="bg-white z-10 text-black rounded-md m-2 p-4 lg:w-[30%] h-max">
        <div className="flex justify-between gap-4 pb-2">
          <h5 className="text-[0.65rem] font-bold tracking-tight">
            Your product list
          </h5>
          <p>{productsUpdated.length} items</p>
        </div>
        {productsUpdated.map((x) => (
          <div className="flex hover:bg-gray-50 rounded-sm items-center gap-2 my-2">
            <img
              src={`/assets/imgs/${x.imageUrl}.jpg`}
              alt={x.name}
              className="w-14 h-10 rounded-sm"
            />
            <div className="w-full space-y-1 transition-all ease">
              <div className="flex justify-between">
                <p className="font-semibold">{x.name}</p>
                <p
                  className="text-xs text-gray-400 hover:text-gray-600"
                  onClick={() => {
                    setProductsUpdated((y) => y.filter((z) => z.id !== x.id));
                  }}
                >
                  <Trash2 size={20} />
                </p>
              </div>
              <div className="flex justify-between">
                <p className="space-x-[0.2rem] flex gap-[2px] justify-center items-center">
                  <span
                    className="flex bg-gray-300 hover:bg-gray-400 font-bold p-[3px] rounded-sm"
                    onClick={() => {
                      if (x.quantity == 1) {
                        setProductsUpdated((y) =>
                          y.filter((z) => z.id !== x.id)
                        );
                      } else {
                        setProductsUpdated((y) =>
                          y.map((z) => {
                            if (z.id == x.id) {
                              z.quantity -= 1;
                            }
                            return z;
                          })
                        );
                      }
                    }}
                  >
                    <Minus size={15} />
                  </span>
                  <span className="font-semibold">{x.quantity}</span>
                  <span
                    onClick={() => {
                      setProductsUpdated((y) =>
                        y.map((z) => {
                          console.log(z, x);
                          if (z.id == x.id) {
                            return { ...z, quantity: z.quantity + 1 };
                          }
                          return z;
                        })
                      );
                    }}
                    className="flex bg-gray-300 hover:bg-gray-400 font-bold p-[3px] rounded-sm"
                  >
                    <Plus size={15} />
                  </span>
                </p>
                <p className="font-bold text-[0.65rem]">${x.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-[20%] z-10">
        <div className="bg-white text-black rounded-md m-2 p-4 h-max">
          <h5 className="text-[0.65rem] font-bold tracking-tight pb-2">
            Order Summary
          </h5>
          <div className="flex flex-col text-[0.55rem] items-center gap-1 my-2">
            <div className="flex justify-between w-full">
              <p className="font-semibold">Subtotal</p>
              <p className="font-bold">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-semibold">Tax</p>
              <p className="font-bold">${tax.toFixed(2)}</p>
            </div>{' '}
            <div className="flex justify-between w-full">
              <p className="font-semibold">Shipping</p>
              <p className="font-bold">${shipping.toFixed(2)}</p>
            </div>
            <p className="h-[1px] border-[1px] border-gray-200 w-full"></p>
            <div className="flex justify-between w-full">
              <p className="font-bold">Total</p>
              <p className="font-bold">
                ${(totalPrice + tax + shipping).toFixed(2)}
              </p>
            </div>
            <button className="bg-black hover:bg-gray-800 text-white rounded-sm w-full py-[4px] mt-2">
              Pay now
            </button>
          </div>
        </div>
        <div className="bg-white text-black rounded-md m-2 p-4 h-max">
          <h5 className="text-[0.65rem] font-bold tracking-tight pb-2">
            Promo Code
          </h5>
          <input
            type="text"
            className="border-[2px] rounded-sm px-[4px] py-[2px] border-gray-400"
            placeholder="Enter promo code"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
