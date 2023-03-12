import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import FavoriteMovieSearchView from './liked-movies/favorite-movie-search-view';
import FavoritesMovieSearchPresenter from './liked-movies/favorites-movie-search-presenter';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';

const view = new FavoriteMovieSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteMovieShowPresenter({
      view,
      favoriteMovies: FavoriteMovieIdb,
    });

    // eslint-disable-next-line no-new
    new FavoritesMovieSearchPresenter({
      view,
      favoriteMovies: FavoriteMovieIdb,
    });
  },
};

export default Like;
