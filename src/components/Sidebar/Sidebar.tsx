import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="sidebar">
      <ul>
        {[
          { to: "/", text: "Get started" },
          { to: "/bar-chart-horizontal", text: "Bar Chart Horizontal" },
          { to: "/bar-chart-vertical", text: "Bar Chart Vertical" },
          { to: "/counter", text: "Counter" },
          { to: "/cleaning", text: "Cleaning Calculator" },
          { to: "/donut-chart", text: "Donut Chart" },
          { to: "/buttons", text: "Gradient Buttons" },
          { to: "/pie-chart", text: "Pie Chart" },
          { to: "/products", text: "Product List" },
          { to: "/todos", text: "Todo List" },
          { to: "/wizard", text: "Wizard" },
        ].map(({ to, text }) => (
          <li key={to}>
            <Link
              to={to}
              className={location.pathname === to ? "active-link" : ""}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
