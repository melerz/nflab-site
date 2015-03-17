define([
	'js/sequencer/collections/seq-col',
	'text!templates/sequencer/list.html',
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
],function(sequencerCollection,sequencerListTemplate,$,_,Backbone){

	var RunList = Backbone.View.extend({
		el: $("#mainView"),
		render: function(){
			var that = this;
			var runs = new sequencerCollection(); //Bind the view to the collection object
			runs.fetch({
				success: function(runsFromServer){
					var compiledTemplate = _.template(sequencerListTemplate);
					that.$el.html(compiledTemplate({runs2:runsFromServer.models}))		
				}//close of success callback
			});//close of runs.fetch
		}
	});

	var viewInstance;
	var instance = function(){
		if(!viewInstance){
			viewInstance = new RunList();
		}
		return viewInstance;
	}

	return {instance:instance};
	
});