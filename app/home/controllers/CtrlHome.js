define(['../app.home'], function(app){
		'use strict';

		var name = 'CtrlHome';
		var dependencies = ['$scope'];
		var controller = function($scope){
			var CHome = this;console.log("HOME");
		} 
		app.controller(name, dependencies.concat(controller));
	})