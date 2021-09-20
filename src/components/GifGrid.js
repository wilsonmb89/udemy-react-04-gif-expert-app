import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const { loading, data: images } = useFetchGifs(category);

  return (
    <Fragment>
      <h3 className="animate__animated animate__fadeIn">{ category }</h3>
      {loading && <p className="animate__animated animate__flash">Cargando...</p> }
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifGridItem
            key={id}
            id={id}
            title={title}
            url={url}
          />
        ))}
      </div> 
    </Fragment>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;
