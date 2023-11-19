import React from "react";
import Support from "../../images/home/support.svg";

import "./TechSupportIcon.scss";

interface TechSupportIconProps {
  href: string;
}

const TechSupportIcon: React.FC<TechSupportIconProps> = ({ href }) => {
  const handleIconClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className="tech-support-icon" onClick={handleIconClick}>
      <img src={Support} className="support-image" />
    </div>
  );
};

export default TechSupportIcon;
