/**
 * Created by srikanthmv on 15/8/16.
 */
( function (djangonoteutils, $) {
    djangonoteutils.baseurl = '';
    djangonoteutils.getCookie = function (name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };

    djangonoteutils.setNewCSRFToken = function () {
        var updatedToken = djangonoteutils.getCookie('csrftoken');
        $('form .csrfToken').each(function (index, value) {
            $(this).val(updatedToken);
        });
    };

    djangonoteutils.getResponse = function (reqType, path, sendData, callbacks ,isFormData) {

        isFormData = isFormData || false ;
        var response = {
            type: reqType,
            url: djangonoteutils.baseurl + path,
            //data: JSON.stringify(sendData),
            headers: {
                "X-CSRFToken": djangonoteutils.getCookie('csrftoken')
            },

            contentType: 'application/json'
        };
//        if (reqType != "GET") {
            if(isFormData){
                response["contentType"] = false;
                response["processData"] = false;
                response["data"] = sendData;
            }
            else{
                response["dataType"] = "json";
                response["data"] = JSON.stringify(sendData)
            }
//        }

        if (callbacks != undefined) {
            if (callbacks["success"]) {
                response["success"] = function (data, textStatus, jqXHR) {
                    callbacks["success"](data, textStatus, jqXHR);
                };
            }
            if (callbacks["error"]) {
                response["error"] = function (data, textStatus, jqXHR) {
                    callbacks["error"](data, textStatus, jqXHR);
                };
            }
        }
        $.ajax(response);
    };

}(window.djangonoteutils = window.djangonoteutils || {}, jQuery) );