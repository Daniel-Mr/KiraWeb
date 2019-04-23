$(document).ready(function () {

    $.get('http://' + appSettings.serverUrl + '/api/zones/' + appSettings.userId, function (data) {

        for (var i = 0; i < data.length; i++) {

            $('#tdata').append('<tr><td>' + data[i].name + '</td><td>' + data[i].icon + '</td><td><button class="btn btn-danger"> - </button></td></tr>');

        }
    });

    $('#btnAdd').on('click', function () {

        var name = $('#txtName').val();
        var icon = $('#imgIcon').val();

        var model = { Name: name, Icon: icon, UserId: appSettings.userId };

        $.ajax({

            method: "POST",
            url: "http://" + appSettings.serverUrl + "/api/zones",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(model)
        }).done(function (msg) {
            $('#tdata').append('<tr><td>' + name + '</td><td>' + icon + '</td><td><button class="btn btn-danger"> - </button></td></tr>');
        });

    });

});