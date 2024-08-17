import { productFeatures } from '../static/ProductFeatures';
import FlipCard from './FlipCard';

function FlipCards() {
  return (
    <div className="grid grid-cols-3 gap-2 justify-center items-center h-screen">
      {productFeatures.map((x) => (
        <FlipCard item={x} />
      ))}
    </div>
  );
}

export default FlipCards;
