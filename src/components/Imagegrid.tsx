import { CSSPropertiesWithVars } from '../interfaces/CustomCssProperties';
import { images } from '../static/Images';

const topLeftSquares = [1, 2, 5, 6];
const topRightSquares = [3, 4, 7, 8];
const bottomLeftSquares = [9, 10, 13, 14];
const bottomRightSquares = [11, 12, 16, 15];
const shiftImageBy = '13rem';

function Imagegrid() {
  return (
    <div className="bg-black flex items-center h-screen">
      <div className="grid grid-cols-4 gap-2 m-8">
        {images.map((x: any) => (
          <div className="hover:-translate-y-2 hover:scale-105 transition-all ease-linear">
            <img
              src={x.url}
              className={`${`animate-reorganize`} bg-white w-24 h-24`}
              style={
                {
                  '--translate-x': `${
                    [...bottomRightSquares, ...topRightSquares].includes(x.id)
                      ? `-${shiftImageBy}`
                      : ''
                  } ${topLeftSquares.includes(x.id) ? `${shiftImageBy}` : ''}`,
                  '--translate-y': ` ${
                    topLeftSquares.includes(x.id) ? `${shiftImageBy}` : ''
                  }${
                    [...bottomRightSquares, ...bottomLeftSquares].includes(x.id)
                      ? `-${shiftImageBy}`
                      : ''
                  } `,
                } as CSSPropertiesWithVars
              }
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imagegrid;
