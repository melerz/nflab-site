define([
	'js/sequencer/models/seq-model',
	'text!templates/sequencer/edit.html',
	'jquery',
	'underscore',
	'backbone',
	'router',
	'bootstrap',
],function(runModel,runEditTemplate,$,_,Backbone,router){

	var runEditView = Backbone.View.extend({
		el:"#mainView",
		initialize: function(options){
			this.router = options.router;
		},
		render: function(options){
			if(options.id)
			{
				//User has pressed 'Edit' button
				var that=this;

				console.log("current id:"+options.id)
				that.currentRun = new runModel({id:options.id});
				that.currentRun.fetch({
					success: function(run){
					var compiledTemplate = _.template(runEditTemplate);
					that.$el.html(compiledTemplate({run:run}));
					}
				});

			}else{
				var compiledTemplate = _.template(runEditTemplate);
				this.$el.html(compiledTemplate({run:null}));
			}
		},//close of render function
		events:{
			'click .deleteButton' : 'deleteRun',
			'submit .form-run-add': 'handleForm'
		}, //close events 
		handleForm: function(ev){
			ev.preventDefault();
			var obj = $(ev.currentTarget).serializeObject();
			var run = new runModel(); //our model
			var that=this;
			run.save(obj,{
				success: function(run){
					//router.navigate('',{'trigger':true})
					that.router.navigate('',{'trigger':true});
				}
			});
			return false;
		}, //close handleForm function
		deleteRun:function(env){
			var that = this
			this.currentRun.destroy({
				success: function(){
					that.router.navigate('',{'trigger':true})
				}
			});
			return false;
		}
	});

	var viewInstance;
	var instance = function(options){
		if(!viewInstance){
			viewInstance = new runEditView({router:options.router});
		}
		return viewInstance;
	}
	return {instance:instance};
});