import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppBar from "../component/AppBar";
import ChatList from "../component/ChatList";
import ChatPage from "./ChatPage";

function MainPage() {
  const [search, openSearch] = useState(false);
  const [filter, updateFilter] = useState("");

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
    <div className="h-screen w-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex flex-col lg:max-w-xs">
        <AppBar
          search={search}
          filter={filter}
          updateFilter={updateFilter}
          openSearch={openSearch}
        />

        <ChatList
          chat={chat}
          filter={filter}
          className="overflow-y-scroll h-full"
        />
      </div>

      <div className="flex flex-col h-screen w-full lg:flex-1">
        {openedChat == null ? (
          <div className="flex flex-col h-full">
            <div className="m-auto text-center hidden lg:block">
              <FontAwesomeIcon icon={faComments} size="5x" className="mb-5" />
              <h2>Click chat in the left side to start chatting</h2>
            </div>
            <AppBar
              search={search}
              filter={filter}
              className="lg:hidden"
              updateFilter={updateFilter}
              openSearch={openSearch}
            />
            <ChatList
              chat={chat}
              filter={filter}
              className="h-full overflow-y-scroll lg:hidden"
            />
          </div>
        ) : (
          <ChatPage />
        )}
      </div>
    </div>
  );
}

export default MainPage;
