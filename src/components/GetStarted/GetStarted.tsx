import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import "./GetStarted.scss";

export const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="get-started-container">
      <h1 className="page-title">Welcome to Front-end Components Demo</h1>
      <p className="page-description">
        This is a demo website built with React and TypeScript, featuring a
        variety of components such as a bar charts, basic todo list, product
        list, cleaning calculator, a multi-step wizard, and some others. It
        utilizes SCSS for styling and React Router for navigation.
      </p>
      <p className="page-description">
        The project also has a splash screen that you can see on reload as well
        as a toast notification system when clicking the buttons. Try it out!
      </p>
      <Button
        className="test-button"
        onClick={() => navigate("/bar-chart-horizontal")}
      >
        Start exploring
      </Button>
    </div>
  );
};
