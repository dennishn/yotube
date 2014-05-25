
/*================================================================
=>                  Controller = Main
==================================================================*/
/*global app*/

app.controller('MainCtrl', ['$scope', '$timeout', 'youtube', 'Playlist', function ($scope, $timeout, youtube, Playlist) {

	'use strict';

    //Pagination behavior
    $scope.currentPage = 1;

    //Pagination logic
    $scope.nextPage = null;
    $scope.prevPage = null;

    var videos = new Playlist;
    $scope.videos = [];

    videos.getFirstPage().then(function (response) {
        // Sanitize so we keep the vars short
        var data = response.data;

        $scope.nextPage = data.nextPageToken;

        angular.forEach(response.data.items, function(value, key) {
            $scope.videos.push(value);
        });

        $scope.maxPages = calculatePages(data.pageInfo.resultsPerPage, data.pageInfo.totalResults);

        // For debugging
        console.log(response, ' pushed to scope: ', $scope.videos);
    });

    $scope.getNextPage = function() {
        videos.getNextPage($scope.nextPage).then(function(response) {
            // Sanitize so we keep the vars short
            var data = response.data;

            $scope.nextPage = data.nextPageToken ? data.nextPageToken : undefined;
            $scope.prevPage = data.prevPageToken ? data.prevPageToken : undefined;

            // Infinite Scroll behavior
            // $timeout(function() {
            //     angular.forEach(data.items, function(value, key) {
            //         $scope.videos.push(value);
            //     });
            // });

            // Pagination behavior
            $scope.videos = data.items;

            $scope.currentPage++;

            // For debugging
            console.log(response);
        });
    };

    $scope.getPrevPage = function() {
        videos.getPrevPage($scope.prevPage).then(function(response) {
            // Remember, theres no going backwards in inf-scroll ;)

            // Sanitize so we keep the vars short
            var data = response.data;

            $scope.nextPage = data.nextPageToken ? data.nextPageToken : undefined;
            $scope.prevPage = data.prevPageToken ? data.prevPageToken : undefined;

            // Pagination behavior
            $scope.videos = data.items;
            $scope.currentPage--;

            console.log(response);
        });
    };

    $scope.createEmbedLink = function(id) {
        return '//www.youtube.com/embed/' + id;
    }

    // Private functions
    function calculatePages(resultsPerPage, totalResults) {
        return Math.floor((resultsPerPage + totalResults - 1) / 10);
    }

}]);


/*-----  End of Controller = Main  ------*/



