const socket = new WebSocket('ws://localhost:12000');
// Connection opened
const user = ""
const pass = ""
socket.addEventListener('open', function (event) {
    console.log("connection successful")
    socket.send(`USER ${user}`)
});

socket.addEventListener('message',(e) => {
    const message = e.data

    console.log(message)
    if(message === "USER OK"){
        socket.send(`PASS ${pass}`)
        
    }
    else if(message === "OK"){
        socket.send("LIST")
        console.log('access granted')
    }
    else if (message.split(" ")[0] == "LIST"){
        
        const listing = JSON.parse(message.split(" ",2)[1])
        console.log(listing)
    }
    
})

socket.addEventListener('close',() => {
    console.log("connection failed")
    
})









// const downloadFile = (blob,filename,ext) => {
//     var objectUrl = URL.createObjectURL(blob);
//     var link=document.createElement('a');
//     link.href=objectUrl
//     link.download=`${filename}.${ext}`;
//     link.click();
// }