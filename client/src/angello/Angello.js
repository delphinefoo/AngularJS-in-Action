var my Module = angular.module('Angello',
	[
		'ngRoute', 
		'ngAnimate',
		'firebase',
		'ngMessages',
		'Angello.Common',
		'Angello.Dashboard',
		'Angello.Login',
		'Angello.Storyboard',
		'Angello.User',
		'authO',
		'angular-jwt',
		'angular-storage'
	]);

myModule.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'storyboard/tmpl/storyboard.html',
			controller: 'StoryboardCtrl',
			controllerAs: 'storyboard'
		})
		.when('/dashboard', {
			templateUrl: 'src/angello/dashboard/tmpl/dashboard.html',
			controller: 'DashboardCtrl',
			controllerAs: 'dashboard'
		})
		.when('/users', {
			templateUrl: 'src/angello/user/tmpl/users.html',
			controller: 'UserCtrl',
			controllerAs: 'users'
		})
		.when('/users/:userId', {
			templateUrl: 'src/angello/user/tmpl/user.html',
			controller: 'UserCtrl',
			controllerAs: 'myUser'
		})
		.when('/login', {
			templateUrl: 'src/angello/login/tmpl/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'login'
		})
		.otherwise({redirectTo: '/'});
});