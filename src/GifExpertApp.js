import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Samurai X']);

  return(
    <Fragment>
      <h2>GiExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories}/>
      {categories.map(category =>
        <GifGrid
          key={category}
          category={category}
        ></GifGrid>
      )}
    </Fragment>
  );
};

export default GifExpertApp;
