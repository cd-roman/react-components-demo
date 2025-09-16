import { useState } from "react";
import { Button } from "../../components/ui/Button";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <div className="counter">
        <h2>Counter: {count}</h2>
        <Button onClick={() => setCount((prev) => prev - 1)}>Decrease</Button>
        <Button onClick={() => setCount(0)}>Reset count</Button>
        <Button onClick={() => setCount((count) => count + 1)}>Increase</Button>
        <p className="counter-description">
          The Counter component is a basic stateful component that allows users
          to increment, decrement, and reset a counter value. The component can
          be used in any part of the application where a counter functionality
          is needed.
        </p>
      </div>
    </div>
  );
};
