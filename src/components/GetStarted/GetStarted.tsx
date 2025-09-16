import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import "./GetStarted.scss";

export const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="get-started-container">
      <h1 className="page-title">Welcome to UI Components Showcase</h1>
      <p className="page-description">
        This is a demo web app built with React and TypeScript, featuring a
        variety of reusable UI components such as a bar, column, and donut
        charts, basic todo list, product list, cleaning calculator, a multi-step
        wizard, and some others. It utilizes SCSS for styling, React Router for
        navigation, and Vite as a built tool.
      </p>
      <p className="page-description">
        The project also has a splash screen that you can see on reload, as well
        as a toast notification system implemented with React-Tostify when
        clicking the buttons. Try it out!
      </p>
      <Button
        className="get-started-btn"
        onClick={() => navigate("/bar-chart-horizontal")}
      >
        Start exploring
      </Button>
    </div>
  );
};
