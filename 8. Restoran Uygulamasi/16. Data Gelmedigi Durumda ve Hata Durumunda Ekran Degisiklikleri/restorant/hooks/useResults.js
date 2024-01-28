import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
const [errorMesaje, setErrorMesaje] = useState('')
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'İstanbul',
        },
      });
      setResults(response.data.businesses);
      setErrorMesaje('');
    } catch (error) {
      setErrorMesaje('Bağlantı hatası');
    }
    
  };
  useEffect(() => {
    searchApi('Toast');
  }, []);

  return [searchApi,results,errorMesaje];
};
