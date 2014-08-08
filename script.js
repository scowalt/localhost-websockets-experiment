var websocket = null;
if (!(window.WebSocket && (WebSocket.CLOSED == 3 || WebSocket.prototype.CLOSED == 3))) {
	// web browser doesn't support web sockets
	text.innerHTML = "websockets (or version) not supported,<br>please try a more recent web browser";
} else {
	// open websocket connection
	websocket = new WebSocket('ws://' + 'localhost' + ':' + 9998);
}

websocket.onopen = function onOpen() {
	console.log('open');
	websocket.send('test');
};

websocket.onclose = function onClose() {
	console.log('close');
};

websocket.onmessage = function onMessage(e) {
	console.log(e);
}