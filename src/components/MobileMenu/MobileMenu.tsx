import { Link, useLocation } from "react-router-dom";
import "./MobileMenu.scss";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <nav>
        <ul>
          {[
            { to: "/", text: "Get started" },
            { to: "/bar-chart-horizontal", text: "Bar Chart Horizontal" },
            { to: "/circle-charts", text: "Circle Charts" },
            { to: "/cleaning", text: "Cleaning Calculator" },
            { to: "/column-chart", text: "Column Chart" },
            { to: "/column-chart-annual", text: "Column Chart Annual" },
            { to: "/counter", text: "Counter" },
            { to: "/donut-chart", text: "Donut Chart" },
            { to: "/buttons", text: "Gradient Buttons" },
            { to: "/pie-chart", text: "Pie Chart" },
            { to: "/pie-chart-monochrome", text: "Pie Chart Monochrome" },
            { to: "/products", text: "Product List" },
            { to: "/todos", text: "Todo List" },
            { to: "/wizard", text: "Wizard" },
          ].map(({ to, text }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? "active-link" : ""}
                onClick={onClose}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
