const Card = ({ children, className }: any) => {
  return (
    <div className={`${className} bg-gradient-r p-2p rounded-sm`}>
      <div className="bg-white dark:bg-black p-14 text-xxs cursor-pointer shadow-md shadow-slate-400 hover:text-black hover:bg-gradient-to-r hover:from-slate-300 hover:to-orange-200 hover:shadow-none transition-all ease-in font-semibold">
        {children}
      </div>
    </div>
  );
};

export default Card;
