import React from 'react';
import Search from './Search/Search';
import ImgBanner from './ImgBanner/ImgBanner';
import ItemSelection from './ItemSelection/ItemSelection';

const Main = () => {
  return (
    <div className="main">
      <Search />
      <ImgBanner />
      <ItemSelection />
    </div>
  )
}

export default Main;