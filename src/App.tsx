import { useCallback, useEffect, useState } from 'react';
import Button from './components/Button';
import Carousel from './components/Carousel';
import Promotion from './components/Promotion';
import Sidebar from './components/Sidebar';
import Reactangels from './components/Reactangels';
import ImageCarousel from './components/ImageCarousel';
import Wave from './components/Wave';
import ProfileCard from './components/ProfileCard';
import { Route, Routes } from 'react-router-dom';
import { Product } from './components/Product';

const slides = [
  'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg',
  'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/286763/pexels-photo-286763.jpeg?auto=compress&cs=tinysrgb&w=600',
];

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (darkTheme) {
      document.getElementById('root')?.classList.add('dark');
    } else {
      document.getElementById('root')?.classList.remove('dark');
    }
  }, [darkTheme]);

  const theme = useCallback(() => {
    if (darkTheme) {
      return { background: 'black', color: 'white' };
    }
    return { background: 'white', color: 'black' };
  }, [darkTheme]);

  return (
    <div className="w-screen h-full flex justify-between" style={theme()}>
      {/* <div className="" onClick={() => setDarkTheme((theme) => !theme)}>
        <img src="" alt="" />
        cask
      </div> */}
      <div>
        <Sidebar />
      </div>
      <div className="pb-10 flex flex-col space-y-8 items-center flex-1">
        <Routes>
          <Route path="/profile-card" element={<ProfileCard />}></Route>
          <Route path="/rectangles" element={<Reactangels />}></Route>
          <Route path="/wave" element={<Wave />}></Route>
          <Route path="/carousel" element={<Carousel />}></Route>
          <Route path="/button" element={<Button />}></Route>
          <Route path="/image-carousel" element={<ImageCarousel />}></Route>
          <Route path="/promotion" element={<Promotion />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
