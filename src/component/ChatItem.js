import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { chatTimeFormatter } from '../utils/formatter';
import React from 'react';
function ChatItem({
  name,
  image,
  datetime,
  content,
  unread,
  onClick,
  className,
  userChat,
}) {
  return (
    <div
      className={`flex w-full justify-between px-4 py-2 ` + className}
      onClick={onClick}
    >
      <div className="flex truncate grow">
        <img src={image} alt="" className="rounded-full w-12 h-12" />
        <div className="ml-3 m-auto truncate">
          <h4 className="font-bold truncate text-sm">{name}</h4>
          <p className="truncate text-xs">
            {userChat && (
              <FontAwesomeIcon
                icon={userChat == 'sent' ? faCheck : faCheckDouble}
                className="mr-1"
                size="xs"
              />
            )}
            {content}
          </p>
        </div>
      </div>
      <div className="flex flex-col my-auto w-fit">
        <p className="text-xs mb-1">{chatTimeFormatter(datetime)}</p>

        {unread > 0 && (
          <div className="bg-[#CE7777] ml-auto w-4 h-4 flex items-center justify-center rounded-full">
            <span className="text-2xs text-white">{unread}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatItem;
