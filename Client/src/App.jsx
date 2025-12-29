import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "./chat";

const socket = io.connect("http://localhost:3000");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const [showChat, setshowChat] = useState(false);

  const join_chat = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setshowChat(true);
    }
  };
  return (
    <>
      {!showChat && (
        <div className="join_room">
          <h1>Join Room</h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter you chat room "
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <button onClick={join_chat}>Join</button>
        </div>
      )}

      {showChat && <Chat socket={socket} username={username} room={room} />}
    </>
  );
};

export default App;
