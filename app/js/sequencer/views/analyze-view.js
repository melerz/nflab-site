define([
	'js/sequencer/collections/analyze-col',
	'text!templates/sequencer/analyze-list.html',
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
],function(analyzeCollection,analyzeListTemplate,$,_,Backbone){

	var AnalyzeList = Backbone.View.extend({
		el: $("#mainView"),

		initialize: function(options)
		{
			//something useful here
		},
		render: function(){
			var that = this;
			var analyzesCollection = new analyzeCollection(); //Bind the view to the collection object
			analyzesCollection.fetch({
				success: function(analyzeCollectionResult){
					var compiledTemplate = _.template(analyzeListTemplate);
					that.$el.html(compiledTemplate({analyzes:analyzeCollectionResult.models}))		
				}//close of success callback
			});//close of analyzesCollection.fetch
		}
	});

	var viewInstance;
	var instance = function(options){
		if(!viewInstance){
			viewInstance = new AnalyzeList(options);
		}
		return viewInstance;
	}

	return {instance:instance};
	
});