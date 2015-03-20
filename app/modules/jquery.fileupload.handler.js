define(['js/sequencer/views/configuration-view','pubsub'],function(ConfigurationView,Mediator){
    'use strict';
    $('#fileupload').fileupload({
        url: '/illumina/uploadcsv/',
        dataType: 'json',
        done: function (e, data){
                console.log(data.result.files)
                $.each(data.result.files, function (index, file) {
                    var csv_data = {

                        id: "analyze-"+file.name.split(".")[0],
                        header: file.name.split(".")[0],
                        reads: file.configuration["reads"],
                        indexes: file.configuration["indexes"]

                      }; //close csv_data
                    ConfigurationView.instance({illumina_id:$(".illumina").
                                                         children(":selected").
                                                            attr("value")}).
                                                                render({data:csv_data})
                    //Mediator.trigger("alert",{foo:$(".illumina").children(":selected").attr("value")})
                    //Illumina ID is initialized in edit.js 

                 }); //close each function
        },//close done function clalback, 
        error: function(e){
                var output= JSON.parse(e.responseText)
                var divElem = $("<div></div>")
                divElem.attr("class","alert alert-danger").text("Error: " + output.error).
                        hide().appendTo('#experiments').fadeIn('slow', function() {
                            divElem.fadeOut(4000)
                });
        }//close error callback
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
});



