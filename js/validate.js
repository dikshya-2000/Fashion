$('form').on('submit', function (e) {
    var focusSet = false;
    if (!$('#email').val()) {
        if ($("#email").parent().next(".validation").length == 0) // only add if not added
        {
            $("#email").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter email address</div>");
        }
        e.preventDefault(); // prevent form from POST to server
        $('#email').focus();
        focusSet = true;
    } else {
        $("#email").parent().next(".validation").remove(); // remove it
    }
    if (!$('#password').val()) {
        if ($("#password").parent().next(".validation").length == 0) // only add if not added
        {
            $("#password").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter password</div>");
        }
        e.preventDefault(); // prevent form from POST to server
        if (!focusSet) {
            $("#password").focus();
        }
    } else {
        $("#password").parent().next(".validation").remove(); // remove it
    }
});  