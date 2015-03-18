define([
		'jquery',
		'underscore',
		'backbone',
		],
	function($,_,Backbone){

			var AnalyzeModel = Backbone.Model.extend({urlRoot:'/analyze/'});
			return AnalyzeModel;
});


