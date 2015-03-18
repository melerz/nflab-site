define([
	'js/sequencer/models/illumina-model',
	'underscore',
	'backbone',
	],function(illuminaModel,_,Backbone){

		var sequencerIlluminas = Backbone.Collection.extend({
			model:illuminaModel,
			url:'/illumina/'
		});

		return sequencerIlluminas;
});
