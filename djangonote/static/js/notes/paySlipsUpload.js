/**
 * Created by srikanthmv on 14/8/16.
 */
$( document ).ready(function() {
    $(".submit-excel-data").click(function(){
        var FormId = $(this).attr("data-id");
        var formData = new FormData($(this).closest("#"+FormId)[0]);
        var callbacks = {
            "success": function(data){
                window.location.reload();
            },
            "error":function(data){
                alert('error');
            }
        };
        window.djangonoteutils.getResponse("post",'/notes/payslips-upload',formData,callbacks,true)
    });

});
