import BubbleItem from "./BubbleItem";

function BubbleList({ message, ownerName, name, className }) {
  return (
    <div className={`${className}`}>
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
