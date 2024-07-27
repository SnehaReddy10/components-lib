import { products } from '../static/Products';
import { FixedSizeList as List } from 'react-window';

function ProductsList() {
  return (
    <div className="h-screen">
      <List
        className="border-2 border-gray-50 bg-gradient-to-r from-pink-100 to-green-100 p-8"
        height={800}
        itemCount={products.length}
        itemSize={70}
        width={700}
      >
        {Row}
      </List>
    </div>
  );
}

function Row({ style, index }: any) {
  return (
    <div style={style} className="text-black font-bold scale-110 text-center">
      {products[index]}
    </div>
  );
}

export default ProductsList;
