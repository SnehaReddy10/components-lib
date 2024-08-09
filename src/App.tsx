import { useCallback, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import { Route, Routes } from 'react-router-dom';
import ShoppingList from './components/ShoppingList';
import ProductsList from './components/ProductsList';
import MusicEvents from './components/MusicEvents';
import RestaurantHero from './components/RestaurantHero';
import SubscribeCard from './components/SubscribeCard';

function App() {
  const [darkTheme] = useState(true);

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
    <div
      className="w-screen relative h-full flex justify-between"
      style={theme()}
    >
      {/* <div className="" onClick={() => setDarkTheme((theme) => !theme)}>
        <img src="" alt="" />
        cask
      </div> */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      {/* <div className="flex md:hidden">
        <SquareMenu
          color="black"
          onClick={() => setShowSideBar((x) => !x)}
          className="absolute top-2 left-0 z-10"
        />
        {showSideBar && <Sidebar />}
      </div> */}
      <div className="pb-10 flex flex-col space-y-8 items-center flex-1">
        <Routes>
          <Route path="/profile-card" element={<ProfileCard />}></Route>
          <Route path="/shopping-list" element={<ShoppingList />}></Route>
          {/* <Route path="/rectangles" element={<Reactangels />}></Route>
          <Route path="/carousel" element={<Carousel />}></Route>
          <Route path="/button" element={<Button />}></Route>
          <Route
            path="/image-carousel"
            element={<ImageCarousel slides={slides} />}
          ></Route>
          <Route path="/promotion" element={<Promotion />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route
            path="/mobile-navigation"
            element={<MobileNavigation />}
          ></Route>
          <Route path="/hotel-booking" element={<HotelBooking />}></Route>
          <Route path="/upload-image" element={<UploadImage />}></Route> */}
          <Route path="/products-list" element={<ProductsList />}></Route>
          <Route path="/music-events" element={<MusicEvents />}></Route>
          <Route path="/subscribe-card" element={<SubscribeCard />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
