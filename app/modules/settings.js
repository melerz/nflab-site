define([
	'jquery',
	'underscore',
	'backbone',
	],function($,_,Backbone){
		"use strict";
		var settings = {
			"rootURL":"http://132.65.52.11:8080/illuminaapi",
			"urls": {
				"run":"/run/",
				"analyze":"/analyze/",
				"illumina":"/illumina/"
			},
			getURL:function(model,data){
				return this.rootURL+this.urls[model]+data+"/"
			}
		};

		return settings

});