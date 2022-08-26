import axios from 'axios';

  

export const getNews = async () => {
  const URL = '';
    try {
      return await axios.get(`${URL}/news`);
    } catch (error) {
        console.log('error while calling get news api', error);
    }
}