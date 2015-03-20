define([
    'js/sequencer/views/edit',
    'js/sequencer/views/analyze-view',
    'jquery',
    'underscore',
    'backbone',
    ],function(SequencerEditView,SequencerAnalyzeView,$,_,Backbone) {
  "use strict";

  // Defining the application router.
  var AppRouter = Backbone.Router.extend({

    routes: {
      '': 'analyzes',
      'add':'add',
      'analyzes':'analyzes',
    }
  });

  var initialize = function(){
    var appRouter = new AppRouter();

    appRouter.on('route:add',function(){
        SequencerEditView.instance({router:appRouter}).render({});
    });

    appRouter.on('route:analyzes',function(id){
        SequencerAnalyzeView.instance({router:appRouter}).render({});
    });
  }
  return {initialize:initialize};
});
