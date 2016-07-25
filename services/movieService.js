angular.module("myMovieServices")
	.factory('movieService', function ($http) {

		var urlPopularMovies = 'http://api.themoviedb.org/3/movie/popular?language=en&api_key=<API-KEY>';
		var upcomingMovies = 'http://api.themoviedb.org/3/movie/upcoming?api_key=<API-KEY>';
		var nowPlayingMovies = 'https://api.themoviedb.org/3/movie/now_playing?api_key=<API-KEY>';
		var topRated = 'http://api.themoviedb.org/3/movie/top_rated?api_key=<API-KEY>';
		// var urlAlbums = 'https://api.spotify.com/v1/artists/<ID-ARTIST>/albums'
		// var urlTracks = 'https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks'

		function getPopularMovie ( valueToKey ) {
			var url  = urlPopularMovies.replace('<API-KEY>', valueToKey)
			return 	$http.get(url)
		}

		function getUpcomingMovies ( valueToKey ) {
			var url  = upcomingMovies.replace('<API-KEY>', valueToKey)
			return 	$http.get(url)
		}

		function getNowPlayingMovies ( valueToKey ) {
			var url  = nowPlayingMovies.replace('<API-KEY>', valueToKey)
			return 	$http.get(url)
		}

		function getTopRatedMovies ( valueToKey ) {
			var url  = topRated.replace('<API-KEY>', valueToKey)
			return 	$http.get(url)
		}

	   return {
			getPopularMovie : getPopularMovie,
			getUpcomingMovies : getUpcomingMovies,
			getNowPlayingMovies : getNowPlayingMovies,
			getTopRatedMovies : getTopRatedMovies	
		}
	})