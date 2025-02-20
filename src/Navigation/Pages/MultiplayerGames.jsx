import React, { useEffect, useState } from 'react';

export const LiveCompetetion = () => {
  const [ws, setWs] = useState(null);
  const [players, setPlayers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [playerMessage, setPlayerMessage] = useState('');
  const [roomId, setRoomId] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [hasJoined, setHasJoined] = useState(false);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => console.log("Connected to WebSocket");

    socket.onmessage = (event) => {
      const parsedMessage = JSON.parse(event.data);

      if (parsedMessage.type === 'joinRoom') {
        setPlayers(prevPlayers => [...prevPlayers, `${parsedMessage.playername} has joined the game`]);
      } else if (parsedMessage.type === 'playerLeft') {
        setMessages(prevMessages => [...prevMessages, `${parsedMessage.playername} has left the game`]);
      } else if (parsedMessage.type === 'answerFeedback') {
        setMessages(prevMessages => [
          ...prevMessages,
          `${parsedMessage.playername} || Answer: ${parsedMessage.answer} has given this answer`
        ]);
      }
    };

    socket.onerror = (error) => console.error('WebSocket Error:', error);

    socket.onclose = () => {
      console.log('WebSocket closed. Attempting to reconnect...');
      setTimeout(() => {
        setWs(new WebSocket('ws://localhost:8080'));
      }, 3000);
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const joinRoom = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      setHasJoined(true);
      ws.send(JSON.stringify({
        type: "join",
        roomId,
        playername: playerName
      }));
    }
  };

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: "answer",
        answer: playerMessage
      }));
      setPlayerMessage('');
    }
  };

  return (
    <div>
      <h1>Live Competition</h1>

      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      {!hasJoined ? (
        <div>
          <input 
            type="text"
            placeholder="Enter Your Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={joinRoom}>JOIN ROOM</button>
        </div>
      ) : (
        <div>
          <input 
            type="text"
            placeholder="Send your message"
            value={playerMessage}
            onChange={(e) => setPlayerMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      )}
    </div>
  );
};
