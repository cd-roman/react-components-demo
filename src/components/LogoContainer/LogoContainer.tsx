import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

import "./LogoContainer.scss";

export const LogoContainer = () => {
  return (
    <div className="logo-container">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};
