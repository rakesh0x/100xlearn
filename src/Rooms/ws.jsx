import WebSocket from "ws";

const server = new WebSocket.Server({ port: 3000});

const rooms = {};

server.on('connection', (socket) => {
    console.log('A User Connected')

    socket.on('message', (message) => {
        const data = JSON.parse(message);
        const { type, roomId, event } = data


        switch(type) {
            case 'createRoom': 
                handleCreateRoom(socket);
                break;
            case 'joinRoom':
                handleJoinRoom(socket, roomId);
                break;
            case 'gameEvent':
                handlegameEvent(socket, roomId, event);
                break;
            default:
                console.log('Unknown message Type :', type)
        }
    });


    // Handle Disconnection 

    socket.on('close', () => {
        console.log('A User Disconnected')
        for( const roomId in rooms ) {
            rooms[roomId].players = rooms[roomId].players.filter((player) => player != socket);
            if(rooms[roomId].players.length == 0) {
                delete rooms[roomId]
            }
        }
    });
});


// Room Creation
function handleCreateRoom(socket) {
    const roomId = Math.random().toString(36).substring(7);
    rooms[roomId] = { players: [socket] };
    socket.send(JSON.stringify({ type: 'roomCreated' , roomId}));
    console.log(`Room Created : ', ${roomId}`)
}

// Join Room
function handleJoinRoom(socket, roomId) {
    if(rooms[roomId] && rooms[roomId].players.length < 2) {
        rooms[roomId].players.push(socket);
        rooms[roomId].players.forEach((players) => {
            players.send(JSON.stringify({ type: "Room Joined", players : rooms[roomId].players.length}))
        })

        console.log(`Players joined room : ${roomId}` );
    } else {
        socket.send(JSON.stringify({ type: "Room Full"}));
    };
};


// Game event 
function handlegameEvent(socket, roomId, event) {
    if(rooms[roomId]) {
        rooms[roomId].players.forEach((player) => {
            if(player != socket ) {
                player.send(JSON.stringify({ type: "gameEvent", event }))
            }

        })
    }
}

