import React from "react";
import "./ComponentHeader.scss";

interface ComponentHeaderProps {
  title: string;
  purpose?: string;
  technical?: string;
  inAction?: string;
  className?: string;
}

export const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  title,
  purpose,
  technical = [],
  inAction,
  className = "",
}) => {
  return (
    <div className={`component-header ${className}`}>

        <h2 className="component-title">{title}</h2>
      
        <div className="component-description">
        {purpose && (
            <div className="description-section">
            <span className="description-label">Purpose:</span> {purpose}
            </div>
        )}

        {technical && (
            <div className="description-section">
            <span className="description-label">Technical:</span> {technical}
            </div>
        )}

        {inAction && (
            <div className="description-section">
            <span className="description-label">In action:</span> {inAction} See an example below.
            </div>
        )}

        <div className="header-divider">
            <hr />
        </div>


        </div>
    </div>
  );
};