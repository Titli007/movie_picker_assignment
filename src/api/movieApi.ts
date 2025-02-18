import axios from 'axios';

const API_KEY = '4de8abab';
const BASE_URL = `http://www.omdbapi.com`;


export const fetchMovies = async (searchQuery : string, type = '', year = '', page = 1) => {
  if (!searchQuery) {
    throw new Error('Search query is required.');
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: searchQuery,
        type : type, 
        y: year, 
        r: 'json',
        page : page, 
      },
    });

    return response.data.Search || []; 
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

// const api_access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWIwMjQwMmYyYjIzMThiYTRjOWNmOTQ0ZmZkY2E5OCIsIm5iZiI6MTczOTg3MDU3NS40NzMsInN1YiI6IjY3YjQ1MTZmMWVkNDUyODQ1MzlmYWQxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZkI4HIXivUYgza1P7VUcJ15LQiMX9N15Qo7IQ1sV-ow'
// const api_key = "4ab02402f2b2318ba4c9cf944ffdca98"

// const api='4de8abab'