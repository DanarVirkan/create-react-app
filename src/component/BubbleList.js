import React, { useEffect, useRef } from 'react';
import BubbleItem from './BubbleItem';

function BubbleList({ message, ownerName, name, className }) {
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current.scrollIntoView({ behaviour: 'smooth' });
  }, [message]);
  return (
    <div className={`${className}`}>
      <div className="mx-auto max-w-5xl flex flex-col h-full">
        {message.map(({ datetime, content, status }, index) => (
          <BubbleItem
            key={index}
            name={status ? ownerName : name}
            datetime={datetime}
            content={content}
            status={status}
          />
        ))}
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
}
export default BubbleList;
