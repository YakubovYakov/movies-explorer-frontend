import { SHORT_MOVIE } from '../utils/constants';

export const filterMovies = (arr, searchQuery, checkbox) => {
  const movies = arr.filter((item) => {
    return item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || item.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (checkbox) {
    return movies.filter((movie) => movie.duration <= SHORT_MOVIE);
  }

  return movies;
};

export const duration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours > 0 ? hours + 'ч ' : '0ч '}${minutes > 0 ? minutes + 'м' : '0м'}`;
};
