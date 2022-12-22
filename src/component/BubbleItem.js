import { chatTimeFormatter } from "../utils/formatter";

function BubbleItem({ name, datetime, content, userChat }) {
  return (
    <div
      className={`w-4/6 border rounded-md p-2 mx-2 mt-2 ${
        !userChat || "bg-[#E8C4C4]"
      } ${userChat ? "ml" : "mr"}-auto`}
    >
      <div className="flex justify-between items-center mb-1">
        <p
          className={`font-bold ${
            userChat ? "text-[#FFFFFF]" : "text-[#E8C4C4]"
          } text-sm`}
        >
          {name}
        </p>
        <span
          className={`text-sm ${
            userChat ? "text-[#FFFFFF]" : "text-[#000000]"
          } `}
        >
          {chatTimeFormatter(datetime)}
        </span>
      </div>
      <p className={`${userChat ? "text-[#FFFFFF]" : "text-[#000000]"} inline`}>
        {content}
      </p>
    </div>
  );
}
export default BubbleItem;
