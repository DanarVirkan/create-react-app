import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { openChat } from "../redux/features/messageSlice";

function ChatBar({ image, name }) {
  const dispatch = useDispatch();

  return (
    <div className="flex p-5 shadow-md items-center h-16 w-full">
      <FontAwesomeIcon
        className="hover:cursor-pointer lg:hidden  mr-3"
        style={{ minWidth: 18 + "px", minHeight: 18 + "px" }}
        icon={faArrowLeft}
        onClick={() => {
          dispatch(openChat(null));
        }}
      />
      <img
        src={image}
        alt=""
        className="rounded-full"
        style={{
          maxHeight: 40 + "px",
          maxWidth: 40 + "px",
        }}
      />
      <h3 className="font-bold ml-3">{name}</h3>
    </div>
  );
}
export default ChatBar;
