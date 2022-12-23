import { chatTimeFormatter } from "../utils/formatter";

function BubbleItem({ name, datetime, content, userChat }) {
  return (
    <div
      className={`w-fit border rounded-md px-4 py-2 mx-2 mt-2 ${
        !userChat || "bg-[#E8C4C4]"
      } ${userChat ? "ml" : "mr"}-auto`}
    >
      <div className="flex justify-between items-center mb-1 space-x-2">
        <p
          className={`font-bold ${
            userChat ? "text-[#FFFFFF]" : "text-[#E8C4C4]"
          } text-2xs`}
        >
          {name}
        </p>
        <span
          className={`text-2xs ${
            userChat ? "text-[#FFFFFF]" : "text-[#000000]"
          } `}
        >
          {chatTimeFormatter(datetime)}
        </span>
      </div>
      <p className={`text-sm ${userChat ? "text-[#FFFFFF]" : "text-[#000000]"} inline`}>
        {content}
      </p>
    </div>
  );
}
export default BubbleItem;
