define(['js/sequencer/views/configuration-view'],function(ConfigurationView){
    'use strict';
    $('#fileupload').fileupload({
        url: '/illumina/uploadcsv/',
        dataType: 'json',
        done: function (e, data){
                $.each(data.result.files, function (index, file) {
                    var csv_data = {

                        id: "analyze-"+file.name.split(".")[0],
                        header: file.name.split(".")[0],
                        reads: file.configuration["reads"],
                        indexes: file.configuration["indexes"]

                      }; //close csv_data
                    ConfigurationView.instance().render({data:csv_data})
/*                    var csv = ich.csvcontainer(csv_data);
                    $(csv).hide().appendTo("#experiments").fadeIn(500);
                    csv_objects.push(csv_data);*/

                 }); //close each function
        },//close done function clalback, 
        error: function(e,data){
            
            $.each($("#fileupload").prop("files"), function (index, file) {

                    var divElem = $("<div></div>")
                    divElem.attr("class","alert alert-danger").text("Error! "+file.name+"is not a .csv file").
                            hide().appendTo('#experiments').fadeIn('slow', function() {
                                divElem.fadeOut(4000)
                            });
                
            })//close each function
        }//close error callback
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
});



