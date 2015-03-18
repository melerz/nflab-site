define([
	'text!templates/sequencer/upload-configuration.html',
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
],function(configurationListTemplate,$,_,Backbone){

	var ConfigurationList = Backbone.View.extend({
		el: $("#experiments"), //from upload template
		initialize: function(){},
		render: function(options){
			//console.log("upload view configuration render"+options.data)
			var compiledTemplate = _.template(configurationListTemplate);
			html=compiledTemplate({csvFile:options.data})
			$(html).hide().appendTo(this.$el).fadeIn(500)
		},
		events:{
			'click #run':'startFastq'
		},

		startFastq:function(ev){
			console.log("hey you clicked me!")
		}
	});

	var viewInstance;
	var instance = function(){
		if(!viewInstance){
			viewInstance = new ConfigurationList();
		}
		return viewInstance;
	}

	return {instance:instance};
	
});