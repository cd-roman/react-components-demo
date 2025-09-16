import { Button } from "../../components/ui/Button";
import { toast } from "react-toastify";
import "./GradientButtons.scss";

export const GradientButtons = () => {
  const notify = (message: string) => toast(message);

  return (
    <div className="card dark gradient-buttons-container">
      <h2 className="light-text">Gradient buttons</h2>
      <Button
        className="gradient-button"
        onClick={() => notify("Orange button clicked")}
      >
        Orange gradient border
      </Button>
      <Button
        className="gradient-button multicolor"
        onClick={() => notify("Multicolor button clicked")}
      >
        Multicolor gradient border
      </Button>
    </div>
  );
};
