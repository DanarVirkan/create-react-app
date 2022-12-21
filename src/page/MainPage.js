import { faComments, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatItem from "../component/ChatItem";
import data from "../data/chat.json";

function MainPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-between p-5 shadow-md h-16">
        <FontAwesomeIcon icon={faComments} size="xl" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="grow overflow-y-scroll">
        {data.map((payload) => (
          <ChatItem
            key={payload.id}
            id={payload.id}
            name={payload.name}
            image={payload.image}
            datetime={payload.message[0].datetime}
            content={payload.message[0].content}
            unread={payload.unread}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
