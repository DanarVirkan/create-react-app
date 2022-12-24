import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import BubbleItem from "../component/BubbleItem";
import { sendMessage } from "../redux/features/messageSlice";

function ChatPage() {
  const [message, setMessage] = useState("");
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const messageState = useSelector((state) => state.message);

  const payload = messageState.chat.filter(
    (payload) => payload.id == messageState.opened
  )[0];
  return (
    <div className="flex-1 h-screen flex flex-col">
      <div className="flex p-5 shadow-md items-center h-16">
        {pathname == "/detail" && (
          <FontAwesomeIcon
            className="hover:cursor-pointer"
            style={{ minWidth: 18 + "px", minHeight: 18 + "px" }}
            icon={faArrowLeft}
            onClick={() => {
              navigate(`/`);
            }}
          />
        )}
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
      <div className="grow overflow-y-scroll pt-4">
        <div className="max-w-5xl mx-auto space-y-4 flex-col">
          {payload.message.map(({ datetime, content, myChat }, index) => (
            <BubbleItem
              key={index}
              name={payload.name}
              datetime={datetime}
              content={content}
              userChat={myChat}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full items-center shadow-md py-2">
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Type your message here..."
          className="w-full rounded-lg mx-2 focus:ring-[#CE7777] focus:border-[#CE7777]"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(
                sendMessage({
                  id: messageState.opened,
                  message: {
                    datetime: new Date().toISOString(),
                    content: message,
                    myChat: messageState.name,
                  },
                })
              );
              setMessage("");
            }
          }}
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="ml-2 mr-5"
          onClick={() => {
            dispatch(
              sendMessage({
                id: messageState.opened,
                message: {
                  datetime: new Date().toISOString(),
                  content: message,
                  myChat: messageState.name,
                },
              })
            );
            setMessage("");
          }}
        />
      </div>
    </div>
  );
}
export default ChatPage;
