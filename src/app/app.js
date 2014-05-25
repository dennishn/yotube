
/*================================================================
=>                  App = yotube
==================================================================*/
/*global angular*/

var app = angular.module('yotube', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
	'use strict';

	$routeProvider
		.when('/', {
			templateUrl: 'app/main/main.tpl.html',
            controller: 'MainCtrl'
		})
		.otherwise({redirectTo: '/'});

	// This is sometimes required for Browser Sync to work poperly
	// $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  yotube App Run()
==================================================================*/

app.run(['$rootScope', function ($rootScope) {

	'use strict';

	console.log('Angular.js run() function...');
}]);

app.value('youtube', {
    apiKey: 'AIzaSyDkHBhIcZlH4vZZe2DeF6McKySw4t0z4W8',
    playlistId: 'PLRNbTEZ7dhL1N9gqKkFQ_c9qFuUJtXvcH',
    resultsPerPage: 10
});
/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */
