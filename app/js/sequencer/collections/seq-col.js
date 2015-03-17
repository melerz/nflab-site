define([
	'js/sequencer/models/seq-model',
	'underscore',
	'backbone',
	],function(sequencerModel,_,Backbone){

		var sequencerRuns = Backbone.Collection.extend({
			model:sequencerModel,
			url:'/run/'
		});

		return sequencerRuns;
});
