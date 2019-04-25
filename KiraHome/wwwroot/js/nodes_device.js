
$(document).ready(function () {

    $.get('http://' + appSettings.serverUrl + '/api/nodes/GetByNode/' + nodeId, function (data) {
        $('#nodeName').html(data.name);
    });

    $.get('http://' + appSettings.serverUrl + '/api/zones/' + appSettings.userId, function (data) {

        for (var i = 0; i < data.length; i++) {

            $('#txtZona').append('<option value="' + data[i].id + '">' + data[i].name + '</option>');

        }

    });

    $.get('http://' + appSettings.serverUrl + '/api/devices/GetByNode/' + nodeId, function (data) {

        for (var i = 0; i < data.length; i++) {

            $('#tdata').append('<tr><td>' + data[i].name + '</td><td>' + data[i].pinNumber + '</td><td>' + data[i].zoneId + '</td><td>' + data[i].type + '</td><td>' + data[i].icon + '</td><td><button class="btn btn-danger"> - </button></td></tr>');

        }

    });

    fnDrawList();

});

function fnDrawList() {
    $.get('http://' + appSettings.serverUrl + '/api/devices/GetByNode/' + nodeId, function (data) {

        $('#tdata').html('');

        for (var i = 0; i < data.length; i++) {

            $('#tdata').append('<tr><td>' + data[i].name + '</td><td>' + data[i].pinNumber + '</td><td>' + data[i].zoneId + '</td><td>' + data[i].type + '</td><td>' + data[i].icon + '</td><td><button class="btn btn-danger" onclick="fnDeleteDevice(' + data[i].id + ')"> - </button></td></tr>');

        }

    });
}

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
    }).always(function (msg) {

        fnDrawList();
        
    });

}

function fnDeleteDevice(id) {

    $.ajax({

        method: "DELETE",
        url: "http://" + appSettings.serverUrl + "/api/devices/" + id

    }).always(function (msg) {

        fnDrawList();

    });

}