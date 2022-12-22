import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BubbleItem from "../component/BubbleItem";

import data from "../data/chat.json";

function ChatPage() {
  const { id } = useParams();
  const [myChat, sendChat] = useState([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const payload = data.filter((payload) => payload.id == id)[0];
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex p-5 shadow-md items-center h-16">
        <FontAwesomeIcon
          className="hover:cursor-pointer"
          style={{ minWidth: 18 + "px", minHeight: 18 + "px" }}
          icon={faArrowLeft}
          onClick={() => {
            navigate(`/`, {
              state,
            });
          }}
        />
        <img
          src={payload.image}
          alt=""
          className="rounded-full ml-3"
          style={{
            maxHeight: 40 + "px",
            maxWidth: 40 + "px",
          }}
        />
        <h3 className="font-bold ml-3">{payload.name}</h3>
      </div>
      <div className="grow overflow-y-scroll">
        {payload.message.map(({ datetime, content }) => (
          <BubbleItem
            name={payload.name}
            datetime={datetime}
            content={content}
          />
        ))}
        {myChat.map((payload) => (
          <BubbleItem
            name={state.name}
            datetime={Date.now()}
            content={payload.content}
            userChat
          />
        ))}
      </div>
      <div className="flex w-full items-center shadow-md py-2">
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Type your message here..."
          className="w-full rounded-lg mx-2"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendChat([
                ...myChat,
                {
                  content: message,
                },
              ]);
              setMessage("");
            }
          }}
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="ml-2 mr-5"
          onClick={() =>
            sendChat([
              ...myChat,
              {
                content: message,
              },
            ])
          }
        />
      </div>
    </div>
  );
}
export default ChatPage;
