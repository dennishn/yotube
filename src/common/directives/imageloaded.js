
/*================================================================
=>                  Directive = imageloaded
==================================================================*/
/*global app*/

app.directive('imageLoaded', ['$rootScope', function ($rootScope) {

    'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
            // console.log(element.find('img'));
            var img = element.find('img');
			img.bind('load', function() {
                console.log('directive imageloaded: image loaded');
                img.addClass('loaded');
            });
            img.bind('error', function() {
                console.log('directive imageloaded: error');
            });
		}
	};
}]);


/*-----  End of Directive = imageloaded  ------*/
