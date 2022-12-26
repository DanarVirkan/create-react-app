import { useDispatch } from "react-redux";
import { openChat, updateUnread } from "../redux/features/messageSlice";
import ChatItem from "./ChatItem";

function ChatList({ chat, filter, className }) {
  const dispatch = useDispatch();

  return (
    <div className={`${className}`}>
      {chat.filter(
        (payload) =>
          payload.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      ).length > 0 ? (
        chat
          .filter(
            (payload) =>
              payload.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
          )
          .map((payload) => {
            const lastIndex = payload.message.length - 1;
            return (
              <ChatItem
                className="hover:cursor-pointer"
                onClick={() => {
                  dispatch(updateUnread(payload.id));
                  dispatch(openChat(payload.id));
                }}
                key={payload.id}
                id={payload.id}
                name={payload.name}
                image={payload.image}
                datetime={payload.message[lastIndex].datetime}
                content={payload.message[lastIndex].content}
                unread={payload.unread}
                userChat={payload.message[lastIndex].status}
              />
            );
          })
      ) : (
        <p className="text-center mt-10">No results found</p>
      )}
    </div>
  );
}
export default ChatList;
