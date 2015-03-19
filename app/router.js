define([
    'js/sequencer/views/seq-run-view',
    'js/sequencer/views/edit',
    'js/sequencer/views/analyze-view',
    'jquery',
    'underscore',
    'backbone',
    ],function(SequencerView,SequencerEditView,SequencerAnalyzeView,$,_,Backbone) {
  "use strict";

  // Defining the application router.
  var AppRouter = Backbone.Router.extend({

    routes: {
      '': 'index',
      'add':'add',
      'analyzes':'analyzes',
      'edit/:id':'edit',
    }
  });

  var initialize = function(){
    var appRouter = new AppRouter();

    appRouter.on('route:index',function(){
        //We are using singleton, otherwise, multipile events will be fired for multipiles views
        SequencerView.instance().render();
    });

    appRouter.on('route:add',function(){
        SequencerEditView.instance({router:appRouter}).render({});
    });

    appRouter.on('route:edit',function(id){
        SequencerEditView.instance({router:appRouter}).render({id:id});
    });

    appRouter.on('route:analyzes',function(id){
        SequencerAnalyzeView.instance({router:appRouter}).render({});
    });
  }
  return {initialize:initialize};
});
