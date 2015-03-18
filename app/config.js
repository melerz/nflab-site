require.config({
  shim: {
  	"bootstrap" : {"deps" : ['jquery']},
    "fileuploadHandler":{"deps":['ich']}
  },
  paths: {
    "underscore": "../bower_components/lodash/dist/lodash.underscore",
    "lodash": "../bower_components/lodash/dist/lodash",
    "template": "../bower_components/lodash-template-loader/loader",
    "jquery": "../bower_components/jquery/dist/jquery",
    "backbone": "../bower_components/backbone/backbone",
    "text":"../bower_components/text/text",
  	"bootstrap":"../bower_components/bootstrap/dist/js/bootstrap.min",
    "fileupload":"modules/jquery.fileupload",
    "jquery.ui.widget":"modules/jquery.ui.widget",
    "fileuploadHandler":"modules/jquery.fileupload.handler",
    "ich":"modules/ICanHaz"
  },

  deps: ["main"]
});
