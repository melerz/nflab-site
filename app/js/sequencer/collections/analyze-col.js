define([
	'js/sequencer/models/analyze-model',
	'underscore',
	'backbone',
	],function(analyzeModel,_,Backbone){

		var sequencerAnalyzes = Backbone.Collection.extend({
			model:analyzeModel,
			url:'/analyze/'
		});

		return sequencerAnalyzes;
});
