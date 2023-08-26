import React from 'react';

export default function CardMain({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="bg-white rounded-[5px] w-full h-[283px] shadow-card p-4 border-[1px] flex flex-col justify-between" {...rest}>
      {children}
    </div>
  );
}