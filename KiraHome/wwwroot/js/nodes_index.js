
var nodes = [];
var current = {};

$(document).ready(function () {

    $.get('http://' + appSettings.serverUrl + '/api/nodes', function (data) {
        nodes = data;
        drawNodes();
    });
});

function drawNodes() {

    $('#nodecontainer').html('');

    for (var i = 0; i < nodes.length; i++) {

        var html = '';

        html += ' <div class="col-lg-4">';
        html += ' <div class="card">';
        html += '    <div class="card-body">';
        html += '        <h5 class="card-title">' + nodes[i].name + '</h5>';
        html += '        <p class="card-text">' + nodes[i].ipAddress + '</p>';
        html += '    </div>';
        html += '    <div class="card-footer">';
        html += '        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick = "setCurrent(\'' + nodes[i].id + '\')">Modificar</button>';
        html += '    </div>';
        html += '</div>';
        html += '</div>';

        $('#nodecontainer').append(html);

    }
}

function setCurrent(id) {

    current = {};

    for (var i = 0; i < nodes.length; i++) {

        if (nodes[i].id == id) {
            current = nodes[i];
        }

    }

    $('#txtName').val(current.name);
    $('#txtIP').val(current.ipAddress);

}

function fnAddDevice() {

    //var device = {  $('#txtDeviceName').val() }

}
