import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { chatTimeFormatter } from "../utils/formatter";

function BubbleItem({ name, datetime, content, status }) {
  return (
    <div
      className={`w-fit border rounded-md px-4 py-2 mx-2 mt-2 ${
        !status || "bg-[#E8C4C4]"
      } ${status ? "ml" : "mr"}-auto`}
    >
      <div className="flex justify-between items-center mb-1 space-x-2">
        <p
          className={`font-bold ${
            status ? "text-[#FFFFFF]" : "text-[#E8C4C4]"
          } text-2xs`}
        >
          {name}
        </p>
        <span
          className={`text-2xs ${
            status ? "text-[#FFFFFF]" : "text-[#000000]"
          } `}
        >
          {chatTimeFormatter(datetime)}
        </span>
      </div>
      <div className="flex justify-between items-center space-x-3">
        <p
          className={`text-sm ${
            status ? "text-[#FFFFFF]" : "text-[#000000]"
          } inline`}
        >
          {content}
        </p>
        {status && (
          <FontAwesomeIcon
            icon={status == "sent" ? faCheck : faCheckDouble}
            className="text-white"
            size="xs"
          />
        )}
      </div>
    </div>
  );
}
export default BubbleItem;
