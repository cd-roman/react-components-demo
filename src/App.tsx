import { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { SplashScreen } from "./components/SplashScreen";
import { LogoContainer } from "./components/LogoContainer";
import { GetStarted } from "./components/GetStarted";
import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";
import { GradientButtons } from "./components/GradientButtons";
import { ProductList } from "./components/ProductList";
import { CleaningCalculator } from "./components/CleaningCalculator";
import { Wizard } from "./components/Wizard";
import { ColumnChart } from "./components/ColumnChart";
import { ColumnChartAnnual } from "./components/ColumnChartAnnual";
import { BarChartHorizontal } from "./components/BarChartHorizontal";
import { DonutChart } from "./components/DonutChart";
import { PieChart } from "./components/PieChart";
import { PieChartMonochrome } from "./components/PieChartMonochrome";
import { Footer } from "./components/Footer";
import { RouteTransition } from "./utils/RouteTransition";
import { MobileMenu } from "./components/MobileMenu";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin();
    gsap.config({ nullTargetWarn: false });
  }, []);

  const [showSplash, setShowSplash] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Router>
        <ToastContainer />
        <div className="app-layout">
          <button
            className="hamburger-button"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            ☰
          </button>
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
          <div className="sidebar-and-content">
            <Sidebar />
            <main className="main-content">
              <LogoContainer />
              <Routes>
                <Route
                  path="/"
                  element={
                    <RouteTransition>
                      <GetStarted />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/counter"
                  element={
                    <RouteTransition>
                      <Counter />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/todos"
                  element={
                    <RouteTransition>
                      <TodoList />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/buttons"
                  element={
                    <RouteTransition>
                      <GradientButtons />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/products"
                  element={
                    <RouteTransition>
                      <ProductList />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/cleaning"
                  element={
                    <RouteTransition>
                      <CleaningCalculator />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/wizard"
                  element={
                    <RouteTransition>
                      <Wizard />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/column-chart"
                  element={
                    <RouteTransition>
                      <ColumnChart />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/bar-chart-horizontal"
                  element={
                    <RouteTransition>
                      <BarChartHorizontal />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/donut-chart"
                  element={
                    <RouteTransition>
                      <DonutChart />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/pie-chart"
                  element={
                    <RouteTransition>
                      <PieChart />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/column-chart-annual"
                  element={
                    <RouteTransition>
                      <ColumnChartAnnual />
                    </RouteTransition>
                  }
                />
                <Route
                  path="/pie-chart-monochrome"
                  element={
                    <RouteTransition>
                      <PieChartMonochrome />
                    </RouteTransition>
                  }
                />
              </Routes>
            </main>
          </div>
          <Footer
            links={[
              {
                title: "GitHub",
                url: "https://github.com/cd-roman/react-components-demo",
              },
            ]}
          />
        </div>
      </Router>
    </>
  );
}

export default App;
