define([
	'jquery',
	'underscore',
	'backbone',
	],function($,_,Backbone){
		"use strict";
		var notificationService ={};
		_.extend(notificationService,Backbone.Events);

		return notificationService;

});