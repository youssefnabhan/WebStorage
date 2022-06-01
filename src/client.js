const socket = new WebSocket('ws://localhost:12000');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});



socket.addEventListener('message', function (event) {

    console.log(event.data)

});


// const downloadFile = (blob,filename,ext) => {
//     var objectUrl = URL.createObjectURL(blob);
//     var link=document.createElement('a');
//     link.href=objectUrl
//     link.download=`${filename}.${ext}`;
//     link.click();
// }