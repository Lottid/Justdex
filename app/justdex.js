// Yunen He 2014 (SukeBeta)

var justdex = angular.module("justdexApp", [
	'ui.router',
	'ngMaterial',
	'list',
	'pokemon'
])
	.config(function($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('justdex',{
				url:'/',
				abstract: true
			});

		$urlRouterProvider.otherwise('/');
	});
