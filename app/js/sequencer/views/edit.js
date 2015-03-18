define([
	'js/sequencer/models/seq-model',
	'js/sequencer/collections/illumina-col',
	'text!templates/sequencer/edit.html',
	'text!templates/sequencer/upload.html',
	'jquery',
	'underscore',
	'backbone',
	'router',
	'bootstrap',
	'fileupload'
],function(runModel,illuminaCollection,runEditTemplate,runUploadTemplate,$,_,Backbone,router){

	var runEditView = Backbone.View.extend({
		el:"#mainView",
		initialize: function(options){
			this.router = options.router;
		},
		render: function(options){
			var that=this;
			if(options.id)
			{
				//User has pressed 'Edit' button
				console.log("current id:"+options.id)
				that.currentRun = new runModel({id:options.id});
				that.currentRun.fetch({
					success: function(run){
					var compiledTemplate = _.template(runEditTemplate);
					that.$el.html(compiledTemplate({run:run}));
					}
				});

			}else{
				var illuminaList = new illuminaCollection();
				illuminaList.fetch({
					success:function(illuminaObjects){
        				var compiledTemplate = _.template(runEditTemplate);
		       		    that.$el.html(compiledTemplate({run:null,illumina:illuminaObjects.models}));
					}
				});

			}
		},//close of render function
		events:{
			'click .deleteButton' : 'deleteRun',
			'submit .form-run-add': 'handleForm',
			'change .illumina': 'upload'
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

		deleteRun:function(ev){
			var that = this
			this.currentRun.destroy({
				success: function(){
					that.router.navigate('',{'trigger':true})
				}
			});
			return false;
		},

		upload:function(ev){
			console.log("generate upload template")
			var compiledTemplate = _.template(runUploadTemplate);
   		    $("#uploadView").html(compiledTemplate({}));
			require(["fileuploadHandler"])
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