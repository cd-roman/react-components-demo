import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MobileMenu.scss";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(isOpen);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);

  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
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
            { to: "/feature-vote", text: "Feature Vote" },
            { to: "/buttons", text: "Gradient Buttons" },
            { to: "/pie-chart", text: "Pie Chart" },
            { to: "/pie-chart-monochrome", text: "Pie Chart Monochrome" },
            { to: "/products", text: "Product List" },
            { to: "/tabs", text: "Tabs" },
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
