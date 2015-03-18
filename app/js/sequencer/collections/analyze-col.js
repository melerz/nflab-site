define([
	'js/sequencer/models/analyze-model',
	'underscore',
	'backbone',
	],function(analyzeModel,_,Backbone){

		var sequencerIlluminas = Backbone.Collection.extend({
			model:analyzeModel,
			url:'/analyze/'
		});

		return sequencerAnalyzes;
});
