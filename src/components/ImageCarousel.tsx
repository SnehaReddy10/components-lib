import { useState } from 'react';

const ImageCarousel = ({ slides }: any) => {
  const [firstCarouselCurrentImage, setFirstCarouselCurrentImage] = useState(0);
  const [secondCarouselCurrentImage, setSecondCarouselCurrentImage] =
    useState(0);

  const firstCarouselPrevSlide = () =>
    firstCarouselCurrentImage === 0
      ? setFirstCarouselCurrentImage(slides.length - 1)
      : setFirstCarouselCurrentImage((c) => c - 1);

  const firstCarouselNextSlide = () =>
    firstCarouselCurrentImage === slides.length - 1
      ? setFirstCarouselCurrentImage(0)
      : setFirstCarouselCurrentImage((c) => c + 1);

  const secondCarouselPrevSlide = () =>
    secondCarouselCurrentImage === 0
      ? setSecondCarouselCurrentImage(slides.length - 4)
      : setSecondCarouselCurrentImage((c) => c - 1);

  const secondCarouselNextSlide = () =>
    secondCarouselCurrentImage === slides.length - 4
      ? setSecondCarouselCurrentImage(0)
      : setSecondCarouselCurrentImage((c) => c + 1);

  return (
    <div className="space-y-3 w-1/2 h-screen">
      <div className={`overflow-hidden relative`}>
        <div
          className={`flex transition ease-linear duration-500`}
          style={{
            transform: `translateX(-${firstCarouselCurrentImage * 100}%)`,
          }}
        >
          {slides.map((s: any) => (
            <img src={s} alt="" className="" />
          ))}
        </div>
        <div className="flex absolute inset-0 mx-2 justify-between transition ease-out duration-100">
          <button className="" onClick={firstCarouselPrevSlide}>
            <img
              src="/assets/icons/left-arrow.png"
              alt="left-arrow"
              className="h-5 w-5 bg-slate-200 rounded-full p-1 hover:bg-slate-50"
            />
          </button>
          <button onClick={firstCarouselNextSlide}>
            <img
              src="/assets/icons/right-arrow.png"
              alt="right-arrow"
              className="h-5 w-5 bg-slate-200 rounded-full p-1 hover:bg-slate-50"
            />
          </button>
        </div>
        <div className="flex absolute bottom-0 w-full justify-center transition ease-in duration-200">
          {slides.map((s: any, i: number) => (
            <div
              key={s}
              className={`p-1 m-1 h-1 w-1 rounded-full ${
                i === firstCarouselCurrentImage ? 'bg-white' : 'bg-slate-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className={`overflow-hidden relative`}>
        <div
          className={`flex transition ease-linear duration-500`}
          style={{
            transform: `translateX(-${secondCarouselCurrentImage * 50}%)`,
          }}
        >
          {slides.map((s: any) => (
            <img src={s} alt="" className="w-[12rem] p-1" />
          ))}
        </div>
        <div className="flex absolute inset-0 mx-2 justify-between transition ease-out duration-100">
          <button className="" onClick={secondCarouselPrevSlide}>
            <img
              src="/assets/icons/left-arrow.png"
              alt="left-arrow"
              className="h-5 w-5 bg-slate-200 rounded-full p-1 hover:bg-slate-50"
            />
          </button>
          <button onClick={secondCarouselNextSlide}>
            <img
              src="/assets/icons/right-arrow.png"
              alt="right-arrow"
              className="h-5 w-5 bg-slate-200 rounded-full p-1 hover:bg-slate-50"
            />
          </button>
        </div>
        <div className="flex absolute bottom-0 w-full justify-center transition ease-in duration-200">
          {slides.map((s: any, i: number) => {
            return (
              i % 2 == 0 && (
                <div
                  key={s}
                  className={`p-1 m-1 h-1 w-1 rounded-full ${
                    i === secondCarouselCurrentImage ||
                    i + 1 === secondCarouselCurrentImage
                      ? 'bg-white'
                      : 'bg-slate-400'
                  }`}
                ></div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
