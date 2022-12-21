import { chatTimeFormatter } from "../utils/formatter";

function BubbleItem({ name, datetime, content }) {
  return (
    <div className="w-4/6 border rounded-md p-2 ml-2 mt-2">
      <div className="flex justify-between items-center mb-1">
        <p className="font-bold text-purple-400 text-sm">{name}</p>
        <span className="text-sm">{chatTimeFormatter(datetime)}</span>
      </div>
      <p>{content}</p>
    </div>
  );
}
export default BubbleItem;
