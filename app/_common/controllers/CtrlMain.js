define(['../app.common'], function(app){
		'use strict'

		var name = 'CtrlMain';
		var dependencies = ['$rootScope'];
		var controller = function($rootScope){
			var CMain = this;
		} 
		app.controller(name, dependencies.concat(controller));
	})