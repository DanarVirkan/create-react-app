import {
  faComments,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import ChatItem from "../component/ChatItem";
import data from "../data/chat.json";
import ChatPage from "./ChatPage";

function MainPage() {
  const [search, openSearch] = useState(false);
  const [filter, filterChat] = useState("");
  const [filteredData, dataUpdate] = useState(data);
  const [chat, openChat] = useState(null);

  const navigate = useNavigate();
  const { state } = useLocation();
  const { name } = state;

  return (
    <div className="w-screen h-screen lg:flex">
      <div className="w-full h-full lg:w-2/6 flex flex-col">
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
              onClick={() => {
                filterChat("");
                dataUpdate(
                  data.filter(
                    (payload) =>
                      payload.name.toLowerCase().indexOf("".toLowerCase()) > -1
                  )
                );
              }}
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
        <div className="hidden sm:hidden md:hidden lg:block grow py-2 overflow-y-scroll">
          {filteredData.length > 0 ? (
            filteredData.map((payload) => {
              const lastIndex = payload.message.length - 1;
              return (
                <ChatItem
                  className="hover:cursor-pointer"
                  onClick={() => {
                    openChat({
                      id: payload.id,
                    });
                  }}
                  key={payload.id}
                  id={payload.id}
                  name={payload.name}
                  image={payload.image}
                  datetime={payload.message[lastIndex].datetime}
                  content={payload.message[lastIndex].content}
                  unread={payload.unread}
                />
              );
            })
          ) : (
            <p className="text-center mt-10">No results found</p>
          )}
        </div>
        <div className="block lg:hidden grow py-2 overflow-y-scroll">
          {filteredData.length > 0 ? (
            filteredData.map((payload) => {
              const lastIndex = payload.message.length - 1;
              return (
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
                  datetime={payload.message[lastIndex].datetime}
                  content={payload.message[lastIndex].content}
                  unread={payload.unread}
                />
              );
            })
          ) : (
            <p className="text-center mt-10">No results found</p>
          )}
        </div>
      </div>
      <div className="hidden lg:flex lg:w-4/6">
        {chat == null ? (
          <div className="m-auto text-center">
            <FontAwesomeIcon icon={faComments} size="5x" className="mb-5" />
            <h2>Click chat in the left side to start chatting</h2>
          </div>
        ) : (
          <ChatPage id={chat.id} />
        )}
      </div>
    </div>
  );
}

export default MainPage;
