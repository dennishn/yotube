
/*================================================================
=>                   Factory = Playlist
==================================================================*/
/*global app*/

app.factory('Playlist', ['$http', 'youtube', function ($http, youtube) {

	'use strict';

    var Playlist = function(result) {
        this.result = result;
    }

    Playlist.prototype.getFirstPage = function() {
        var self = this;

        var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C+snippet&maxResults=' + youtube.resultsPerPage + '&playlistId=' + youtube.playlistId +'&key=' + youtube.apiKey;

        return $http.get(url).then(function(response) {
            return response;
        });
    };

    Playlist.prototype.getNextPage = function(nextPageToken) {
        var self = this;

        var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C+snippet&maxResults=' + youtube.resultsPerPage + '&pageToken=' + nextPageToken + '&playlistId=' + youtube.playlistId +'&key=' + youtube.apiKey;

        return $http.get(url).then(function(response) {
            return response;
        });
    }

    Playlist.prototype.getPrevPage = function(prevPageToken) {
        var self = this;

        var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C+snippet&maxResults=' + youtube.resultsPerPage + '&pageToken=' + prevPageToken + '&playlistId=' + youtube.playlistId +'&key=' + youtube.apiKey;

        return $http.get(url).then(function(response) {
            return response;
        });
    }

    return Playlist;

}]);


/*-----  End of Factory = Playlist  ------*/
