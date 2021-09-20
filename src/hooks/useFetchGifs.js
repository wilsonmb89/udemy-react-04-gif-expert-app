import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    loading: true,
    data: []
  });

  useEffect(() => {
    getGifs(category).then(imgs => {
      setState({
        loading: false,
        data: imgs
      });
    });
  }, [category]);

  return state;
}