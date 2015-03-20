define([
	'js/sequencer/models/analyze-model',
	'text!templates/sequencer/upload-configuration.html',
	'jquery',
	'underscore',
	'backbone',
	'settings',
	'pubsub',
	'bootstrap',
],function(AnalyzeModel,configurationListTemplate,$,_,Backbone,Settings,Mediator){

	var ConfigurationList = Backbone.View.extend({
		el: $("#experiments"), //from upload template
		initialize: function(options){

			this.analyzesDataArray = {
					"illumina_id":options.illumina_id
				}
		},
		render: function(options){
			var compiledTemplate = _.template(configurationListTemplate);
			html=compiledTemplate({csvFile:options.data})
			$(html).hide().appendTo(this.$el).fadeIn(500)
			this.analyzesDataArray[options.data["id"]] = options.data

		},
		events:{
			'click .run':'startFastq'
		},

		startFastq:function(ev){
			var currentAnalyzeData = this.analyzesDataArray[$(ev.currentTarget).attr("id")]
			this.createAnalyze(currentAnalyzeData)
		},

		createAnalyze: function(currentAnalyzeData){
				//get form data
			    var analyze_data={
		            "name":currentAnalyzeData.header,
		            "illumina":Settings.getURL("illumina",this.analyzesDataArray["illumina_id"]),
		            "csv":currentAnalyzeData.header,
		            "configuration":{},
	            }
	            $.each(currentAnalyzeData.reads, function(idx, val){

	                var read = {

	                                "NumCycles":val,
	                                "IsIndexedRead":"no"

	                            };
	                var readNumber = $($("div[data-expname="+analyze_data.name+"] tr[data-type=read] input")[idx]).
	                                        val();
	                analyze_data["configuration"][readNumber]=read;
	            });

	            $.each(currentAnalyzeData.indexes, function(idx, val){

	                var index = {

	                                "NumCycles":val,
	                                "IsIndexedRead":"yes"

	                            };

	                var readNumber = $($("div[data-expname="+analyze_data.name+"] tr[data-type=index] input")[idx]).
	                                        val();
	                analyze_data["configuration"][readNumber]=index;
	            });
	            console.log(analyze_data)
	            analyze = new AnalyzeModel();
	            analyze.save(analyze_data);
				// create new task, related to the current run
				//delete current data in array
				delete this.analyzesDataArray[currentAnalyzeData["id"]]
				
		}
	}); //end extend

	var viewInstance;
	var instance = function(options){
		if(!viewInstance){
			viewInstance = new ConfigurationList(options);
		}
		return viewInstance;
	}

	return {instance:instance};
	
});