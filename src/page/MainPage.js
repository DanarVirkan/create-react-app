import {
  faComments,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChatItem from "../component/ChatItem";
import data from "../data/chat.json";

function MainPage() {
  const [search, openSearch] = useState(false);
  const [filter, filterChat] = useState("");
  const [filteredData, dataUpdate] = useState(data);

  const navigate = useNavigate();
  const { state } = useLocation();
  const { name } = state;

  return (
    <div className="w-screen h-screen flex flex-col">
      {search ? (
        <div className="flex justify-between items-center p-5 shadow-md h-16">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ minWidth: 24 + "px", minHeight: 24 + "px" }}
          />
          <input
            type="text"
            className="grow mx-4 border-none focus:border-transparent focus:ring-0"
            placeholder="Search by contact name..."
            value={filter}
            onChange={(e) => {
              filterChat(e.target.value);
              dataUpdate(
                data.filter(
                  (payload) =>
                    payload.name
                      .toLowerCase()
                      .indexOf(e.target.value.toLowerCase()) > -1
                )
              );
            }}
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer"
            icon={faTimes}
            style={{ minWidth: 24 + "px", minHeight: 24 + "px" }}
            onClick={() => filterChat("")}
          />
        </div>
      ) : (
        <div className="flex justify-between p-5 shadow-md h-16">
          <FontAwesomeIcon
            style={{ minWidth: 30 + "px", minHeight: 30 + "px" }}
            icon={faComments}
          />
          <FontAwesomeIcon
            style={{ minWidth: 24 + "px", minHeight: 24 + "px" }}
            className="hover:cursor-pointer"
            icon={faSearch}
            onClick={() => openSearch(!search)}
          />
        </div>
      )}
      <div className="grow py-2 overflow-y-scroll">
        {filteredData.length > 0 ? (
          filteredData.map((payload) => (
            <ChatItem
              className="hover:cursor-pointer"
              onClick={() => {
                navigate(`/detail/${payload.id}`, {
                  state: {
                    name,
                  },
                });
              }}
              key={payload.id}
              id={payload.id}
              name={payload.name}
              image={payload.image}
              datetime={payload.message[0].datetime}
              content={payload.message[0].content}
              unread={payload.unread}
            />
          ))
        ) : (
          <p className="text-center mt-10">No results found</p>
        )}
      </div>
    </div>
  );
}

export default MainPage;
