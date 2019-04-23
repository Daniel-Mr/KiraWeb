
const socket = new WebSocket('ws://' + appSettings.serverUrl + '/ws');

// Abre la conexión
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ event: "OnConnected", d1: "WebClient" }));
});

// Escucha por mensajes
socket.addEventListener('message', function (eventData) {

    var data = JSON.parse(eventData.data);
    
    switch (data.event) {
        case "OnConnected": {
            console.log(data.d1);
            break;
        }
        case "OnToggle": {
            console.log(data);
            break;
        }

        default:

    }

});
