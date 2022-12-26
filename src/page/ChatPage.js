import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BubbleList from "../component/BubbleList";
import ChatBar from "../component/ChatBar";
import {
  sendMessage,
  updateMessageStatus,
} from "../redux/features/messageSlice";

function ChatPage() {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const messageState = useSelector((state) => state.message);

  const payload = messageState.chat.filter(
    (payload) => payload.id == messageState.opened
  )[0];
  return (
    <div className="flex flex-col h-full">
      <ChatBar image={payload.image} name={payload.name} />

      <BubbleList
        className="flex flex-col h-full overflow-y-scroll"
        message={payload.message}
        name={payload.name}
        ownerName={messageState.name}
      />

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
              const idMessage = +new Date();
              dispatch(
                sendMessage({
                  id: messageState.opened,
                  message: {
                    id: idMessage,
                    datetime: new Date().toISOString(),
                    content: message,
                    status: "sent",
                  },
                })
              );
              setMessage("");
              setTimeout(() => {
                dispatch(
                  updateMessageStatus({
                    id: messageState.opened,
                    messageId: idMessage,
                    status: "delivered",
                  })
                );
              }, 1000);
            }
          }}
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="ml-2 mr-5"
          onClick={() => {
            const idMessage = +new Date();
            dispatch(
              sendMessage({
                id: messageState.opened,
                message: {
                  id: idMessage,
                  datetime: new Date().toISOString(),
                  content: message,
                  status: "sent",
                },
              })
            );
            setMessage("");
            setTimeout(() => {
              dispatch(
                updateMessageStatus({
                  id: messageState.opened,
                  messageId: idMessage,
                  status: "delivered",
                })
              );
            }, 1000);
          }}
        />
      </div>
    </div>
  );
}
export default ChatPage;
