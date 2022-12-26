import BubbleItem from "./BubbleItem";

function BubbleList({ message, ownerName, name, className }) {
  return (
    <div className={`container max-w-5xl ${className}`}>
      {message.map(({ datetime, content, status }, index) => (
        <BubbleItem
          key={index}
          name={status ? ownerName : name}
          datetime={datetime}
          content={content}
          status={status}
        />
      ))}
    </div>
  );
}
export default BubbleList;
