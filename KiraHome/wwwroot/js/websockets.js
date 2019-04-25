
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

            switch (data.event) {

                case "OnToggle": {

                    if ($(data.d3).hasClass('active')) {
                        if (data.d1 == 0) {
                            $(data.d3).removeClass('active');
                        }
                    }
                    else {
                        if (data.d1 == 1) {
                            $(data.d3).addClass('active');
                        }
                    }

                    break;
                }

                default:
            }
            break;
        }

        default:

    }

});
