import React from "react";
import { headers } from "../../data/headers";
import { cn } from "../../utils/cn";

const Header: React.FC = () => {
  return (
    <div className={cn("grid grid-cols-2 px-8 pt-4")}>
      {headers.map(({ title }, index) => (
        <span key={title} className={cn("text-gray-1 even:text-end")}>
          {`//0${index + 1}. <${title}>`}
        </span>
      ))}
    </div>
  );
};

export default Header;
