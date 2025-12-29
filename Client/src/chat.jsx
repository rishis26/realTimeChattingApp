import React, { useState, useEffect, useRef } from "react";

const chat = ({ socket, username, room }) => {
  const [currentMessage, setcurrentMessage] = useState("");
  const [messagelist, setMessagelist] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        id: Math.random(),
        room: room,
        author: username,
        message: currentMessage,
        time:
          (new Date(Date.now()).getHours() % 12) +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessagelist((list) => [...list, messageData]);
      setcurrentMessage("");
    }
  };
  useEffect(() => {
    const handleReceiveMsg = (data) => {
      setMessagelist((list) => [...list, data]);
    };
    socket.on("receive_message", handleReceiveMsg);
    return () => {
      socket.off("receive_message", handleReceiveMsg);
    };
  }, [socket]);

  const autoScroll = useRef(null);
  useEffect(() => {
    autoScroll.current.scrollTop = autoScroll.current.scrollHeight;
  }, [messagelist]);

  return (
    <>
      <div className="chat_conatiner">
        <h1>
          Welcome <b>{username}</b>
        </h1>
        <div className="chat_box">
          <div
            className="auto-scrolling-div"
            ref={autoScroll}
            style={{
              height: "450px",
              overflowY: "auto",
              border: "2px solid yellow",
            }}
          >
            {messagelist.map((data) => {
              return (
                <div
                  key={data.id}
                  className="message_content"
                  id={username == data.author ? "you" : "other"}
                >
                  <div>
                    <div
                      className="msg"
                      id={username == data.author ? "g" : "w"}
                    >
                      <p>{data.message}</p>
                    </div>
                    <div className="msg_detail">
                      <p>{data.author}</p>
                      <p>{data.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="chat_body">
            <input
              value={currentMessage}
              type="text"
              placeholder="Type you message"
              onChange={(e) => {
                setcurrentMessage(e.target.value);
              }}
              onKeyPress={(e) => {
                e.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default chat;
