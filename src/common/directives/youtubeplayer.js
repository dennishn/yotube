
/*================================================================
=>                  Directive = youtubePlayer
==================================================================*/
/*global app*/

app.directive('youtubePlayer', ['$rootScope', function ($rootScope) {

    'use strict';

	return {
		restrict: 'A',
        template: '<div class="flex-video"><iframe width="420" height="315" frameborder="0" allowfullscreen></iframe></div>',
        replace: true,
		link: function (scope, element, attrs) {
            element.find('iframe').attr('src', '//youtube.com/embed/' + attrs.youtubeId);
            element.addClass('loaded');
		}
	};
}]);


/*-----  End of Directive = youtubePlayer  ------*/
