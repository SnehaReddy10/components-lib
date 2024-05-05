import Card from './Card';

const arr = [1, 2, 3, 4];

const Carousel = () => {
  return (
    <div className="w-full flex gap-2 items-center">
      {/* <div className="p-1p bg-gradient h-10 rounded-full">
        <div className="bg-black p-4 rounded-full hover:bg-gradient transition-all ease hover:text-black">
          {'<'}
        </div>
      </div> */}
      <div className="mr-4 hover:-translate-x-2 transition-all ease">
        <div className="hover:bg-slate-700 px-3 py-4 rounded-full transition ease">
          <div className="bg-gradient-r h-[2px] w-3 -rotate-45 -translate-y-[0.20rem]"></div>
          <div className="bg-gradient-r h-[2px] w-3 rotate-45 translate-y-[0.20rem]"></div>
        </div>
      </div>
      {arr.map((x) => (
        <Card className="hover:-translate-y-1 transition-all ease" x={x}>
          {x}
        </Card>
      ))}
      <div className="ml-4 hover:translate-x-2 transition-all ease">
        <div className="hover:bg-slate-700 px-3 py-4 rounded-full transition ease">
          <div className="bg-gradient-l h-[2px] w-3 rotate-45 -translate-y-[0.20rem]"></div>
          <div className="bg-gradient-l h-[2px] w-3 -rotate-45 translate-y-[0.20rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
