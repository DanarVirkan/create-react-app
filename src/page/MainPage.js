import {
  faComments,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatItem from "../component/ChatItem";
import { openChat, updateUnread } from "../redux/features/messageSlice";
import ChatPage from "./ChatPage";

function MainPage() {
  const [search, openSearch] = useState(false);
  const [filter, updateFilter] = useState("");

  const dispatch = useDispatch();
  const chat = useSelector((state) => state.message.chat);
  const name = useSelector((state) => state.message.name);
  const openedChat = useSelector((state) => state.message.opened);

  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/login");
    }
  });

  return (
    <div className="h-screen lg:flex">
      <div className="w-full h-full lg:max-w-xs flex flex-col">
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
                updateFilter(e.target.value);
              }}
            />
            <FontAwesomeIcon
              className="hover:cursor-pointer"
              icon={faTimes}
              style={{ minWidth: 24 + "px", minHeight: 24 + "px" }}
              onClick={() => {
                updateFilter("");
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
                  />
                );
              })
          ) : (
            <p className="text-center mt-10">No results found</p>
          )}
        </div>
        <div className="block lg:hidden grow py-2 overflow-y-scroll">
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
                      navigate(`/detail`);
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
      <div className="hidden lg:flex flex-1">
        {openedChat == null ? (
          <div className="m-auto text-center">
            <FontAwesomeIcon icon={faComments} size="5x" className="mb-5" />
            <h2>Click chat in the left side to start chatting</h2>
          </div>
        ) : (
          <ChatPage />
        )}
      </div>
    </div>
  );
}

export default MainPage;
