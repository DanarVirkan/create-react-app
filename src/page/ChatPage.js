import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import BubbleItem from "../component/BubbleItem";

import data from "../data/chat.json";

function ChatPage() {
  const { id } = useParams();
  const payload = data.filter((payload) => payload.id == id)[0];
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex p-5 shadow-md items-center h-16">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <img
          src={payload.image}
          alt=""
          className="rounded-full ml-3"
          style={{
            maxHeight: 50 + "px",
            maxWidth: 50 + "px",
          }}
        />
        <h3 className="font-bold ml-3">{payload.name}</h3>
      </div>
      <div className="grow">
        {payload.message.map(({ datetime, content }) => (
          <BubbleItem
            name={payload.name}
            datetime={datetime}
            content={content}
          />
        ))}
      </div>
      <div className="flex w-full items-center shadow-md py-2">
        <input
          type="text"
          placeholder="Type your message here..."
          className="w-full rounded-lg mx-2"
        />
        <FontAwesomeIcon icon={faPaperPlane} className="ml-2 mr-5" />
      </div>
    </div>
  );
}
export default ChatPage;
