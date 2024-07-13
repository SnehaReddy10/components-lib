function Wave() {
  return (
    <div className="mt-4">
      wave
      <div className="bg-slate-300 h-36 w-40 shadow-sm shadow-slate-100 rounded-ss-[10rem] rounded-se-[6rem] rounded-es-[4rem] rounded-ee-[4rem]">
        <div className="h-16 w-16 bg-black ml-6 rounded-ss-[10rem]"></div>
      </div>
      <div className="flex justify-between">
        <div className="bg-slate-300 h-12 w-12 rounded-full"></div>
        <div className="bg-slate-300 h-12 w-12 rounded-full"></div>
      </div>
      {/* <div className="bg-slate-300 h-44 w-12 rounded-ss-[4rem]"></div> */}
      {/* <div className="bg-slate-300 h-44 w-12 rounded-ss-full"></div>
      <div className="bg-slate-300 h-44 w-12"></div> */}
    </div>
  );
}

export default Wave;
