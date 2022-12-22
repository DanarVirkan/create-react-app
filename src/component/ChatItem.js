import { chatTimeFormatter } from "../utils/formatter";

function ChatItem({
  name,
  image,
  datetime,
  content,
  unread,
  onClick,
  className,
}) {
  return (
    <div
      className={`flex w-full justify-between px-4 py-2 ` + className}
      onClick={onClick}
    >
      <div className="flex truncate grow">
        <img
          src={image}
          alt=""
          className="rounded-full"
          style={{
            maxHeight: 60 + "px",
            maxWidth: 60 + "px",
          }}
        />
        <div className="ml-3 m-auto truncate">
          <h4 className="font-bold truncate">{name}</h4>
          <p className="truncate">{content}</p>
        </div>
      </div>
      <div className="flex flex-col my-auto">
        <p className="text-sm mb-1">{chatTimeFormatter(datetime)}</p>
        <div
          className="ml-auto block"
          style={{
            width: "20px",
            height: "20px",
          }}
        >
          {unread > 0 && (
            <span
              className="bg-green-500 block rounded-full text-center text-xs"
              style={{
                width: "20px",
                height: "20px",
              }}
            >
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
