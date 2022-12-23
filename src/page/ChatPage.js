import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BubbleItem from "../component/BubbleItem";
import { sendMessage } from "../redux/features/messageSlice";

function ChatPage({ id: idProp }) {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const dispatch = useDispatch();
  const messageState = useSelector((state) => state.message.chat);

  const payload = messageState.filter(
    (payload) => payload.id == id || idProp // BUG
  )[0];
  return (
    <div className="flex-1 h-screen flex flex-col">
      <div className="flex p-5 shadow-md items-center h-16">
        {!idProp && (
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
                  id: idProp || id,
                  message: {
                    datetime: new Date().toISOString(),
                    content: message,
                    myChat: state.name,
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
                id: idProp || id,
                message: {
                  datetime: new Date().toISOString(),
                  content: message,
                  myChat: state.name,
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
