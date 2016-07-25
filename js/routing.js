angular.module("myAppConfig", [])
	.config(function( $routeProvider ){

			$routeProvider
				.when('/',{
					templateUrl: '/templates/popularmovies.html',
					controller: 'PopularViewController'
				})
				.when('/popularmovies',{
					templateUrl: '/templates/popularmovies.html',
					controller: 'PopularViewController'
				})
				.when('/upcomingmovies',{
					templateUrl: '/templates/upcomingmovies.html',
					controller: 'UpcomingViewController'
				})
				.when('/nowplayingmovies',{
					templateUrl: '/templates/nowplayingmovies.html',
					controller: 'NowPlayingViewController'
				})
				.when('/topratedmovies',{
					templateUrl: '/templates/topratedmovies.html',
					controller: 'TopRatedViewController'
				})
				.otherwise({ redirectTo: '/' }); ;

	})