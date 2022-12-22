import { chatTimeFormatter } from "../utils/formatter";

function BubbleItem({ name, datetime, content, userChat }) {
  return (
    <div
      className={`w-4/6 border rounded-md p-2 mx-2 mt-2 ${
        userChat && "bg-purple-200"
      } float-${userChat ? "right" : "left"}`}
    >
      <div className="flex justify-between items-center mb-1">
        <p
          className={`font-bold  text-purple-${
            userChat ? "600" : "400"
          } text-sm`}
        >
          {name}
        </p>
        <span className="text-sm">{chatTimeFormatter(datetime)}</span>
      </div>
      <p>{content}</p>
    </div>
  );
}
export default BubbleItem;
