import { productFeatures } from '../static/ProductFeatures';
import FlipCard from './FlipCard';

function FlipCards() {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 justify-center items-center h-screen">
      {productFeatures.map((x) => (
        <FlipCard item={x} />
      ))}
    </div>
  );
}

export default FlipCards;
