angular.module("myAppControllers", ['ngRoute'])
	.controller("PopularViewController", function( $rootScope,$scope,movieService ) {
		
		$rootScope.section ="Popular Movies";
		var apiKey="584d06d61043f1b59fffbdbc91eba28a";
		var imgurl = "http://image.tmdb.org/t/p/w500";
		
			movieService.getPopularMovie( apiKey )
				.then(function( dataFromApi ) {
					 console.log(dataFromApi);
					 $scope.posters = dataFromApi.data.results;
				})
			
	})
	.controller("UpcomingViewController", function( $rootScope,$scope,movieService ) {
		
		$rootScope.section ="Upcoming Movies";
		var apiKey="584d06d61043f1b59fffbdbc91eba28a";
		
		
			movieService.getUpcomingMovies( apiKey )
				.then(function( dataFromApi ) {
					 console.log(dataFromApi);
					 $scope.upcomings = dataFromApi.data.results;
				})
	})
	.controller("NowPlayingViewController", function( $rootScope,$scope,movieService ) {
		
		$rootScope.section ="Now Playing Movies";
		var apiKey="584d06d61043f1b59fffbdbc91eba28a";
		
		
			movieService.getNowPlayingMovies( apiKey )
				.then(function( dataFromApi ) {
					 console.log(dataFromApi);
					 $scope.nowplayings = dataFromApi.data.results;
					  console.log($scope.nowplayings);
				})
	})
	.controller("TopRatedViewController", function( $rootScope,$scope,movieService ) {
			$rootScope.section ="Top Rated Movies";

			var apiKey="584d06d61043f1b59fffbdbc91eba28a";
		
			movieService.getTopRatedMovies( apiKey )
				.then(function( dataFromApi ) {
					 console.log(dataFromApi);
					 $scope.toprateds = dataFromApi.data.results;
					  console.log($scope.toprateds);
				})		

	})
	