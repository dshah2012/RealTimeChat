window.onload = function() {

	var messages = [];
    var socket = io.connect('http://127.0.0.1:3700');
    var field = document.getElementById("mess");
    var sendButton = document.getElementById("sendM");
    var content = document.getElementById("content");
    

    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data.message);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += messages[i] + '<br />';
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });

    sendButton.onclick = function() {
        var text = field.value;
        socket.emit('send', { message: text });
    };

}