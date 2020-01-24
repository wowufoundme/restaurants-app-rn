import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState('');

  const searchApi = async value => {
    try {
      setErrors('');
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: value,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log('Error found');
      setResults([]);
      setErrors(`Something went wrong! ${error}`);
    }
  };

  useEffect(() => {
    searchApi('Pasta');
  }, []);

  return [searchApi, results, errors];
};
