// Kick off the application.
require(["app", "router"], function(app, Router) {
	// Define your master router on the application namespace and trigger all
	// navigation from this instance.
//	app.router = new Router();
	app.router=Router.initialize(); //=Router()?

	$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
	options.url= "http://132.65.120.148:8080/illuminaapi" + options.url;
	//options.url= "http://10.100.102.11:8080/illuminaapi" + options.url;
	});

	$.fn.serializeObject = function()
	{
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	};

	var _sync = Backbone.sync;
	Backbone.sync = function(method, model, options){

	    // Add trailing slash to backbone model views
	    var _url = _.isFunction(model.url) ?  model.url() : model.url;
	    _url += _url.charAt(_url.length - 1) == '/' ? '' : '/';

	    options = _.extend(options, {
	        url: _url
	    });

	    return _sync(method, model, options);
	};

	// Trigger the initial route and enable HTML5 History API support, set the
	// root folder to '/' by default.  Change in app.js.
	Backbone.history.start({ pushState: false, root: app.root });
});
