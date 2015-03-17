define([
		'jquery',
		'underscore',
		'backbone',
		],
	function($,_,Backbone){

			var seqModel = Backbone.Model.extend({urlRoot:'/run/'});
			return seqModel;
});


