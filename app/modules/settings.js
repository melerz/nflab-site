define([
	'jquery',
	'underscore',
	'backbone',
	],function($,_,Backbone){
		"use strict";
		var settings = {
			"rootURL":"http://132.65.120.148:8080/illuminaapi",
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