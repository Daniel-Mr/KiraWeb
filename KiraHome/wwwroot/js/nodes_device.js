
$(document).ready(function () {
    $.get('http://' + appSettings.serverUrl + '/api/nodes/GetByNode/' + nodeId, function (data) {
        $('#nodeName').html(data.name);
    });

    $.get('http://' + appSettings.serverUrl + '/api/zones/' + appSettings.userId, function (data) {

        for (var i = 0; i < data.length; i++) {

            $('#txtZona').append('<option value="' + data[i].id + '">' + data[i].name + '</option>');

        }

    });
});


function fnAddDevice() {


    var name = $('#txtName').val();
    var icon = $('#imgIcon').val();


    var model = {

        "nodeId": nodeId,
        "pinNumber": $('#txtPin').val(),
        "name": $('#txtNombre').val(),
        "icon": $('#txtIcono').val(),
        "type": $('#txtTipo').val(),
        "zoneId": $('#txtZona').val()
    };

    $.ajax({

        method: "POST",
        url: "http://" + appSettings.serverUrl + "/api/devices",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(model)
    }).done(function (msg) {
        $('#tdata').append('<tr><td>' + name + '</td><td>' + icon + '</td><td><button class="btn btn-danger"> - </button></td></tr>');
    });

}
