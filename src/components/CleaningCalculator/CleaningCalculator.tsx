import { useState } from "react";
import "./CleaningCalculator.scss";

import { toast } from "react-toastify";

const prices: { [key: string]: number } = {
  "1-1": 100,
  "2-1": 110,
  "2-2": 130,
  "3-1": 120,
  "3-2": 130,
  "3-3": 150,
  "4-2": 140,
  "4-3": 160,
  "4-4": 180,
  "4-5": 200,
  "5-2": 140,
  "5-3": 160,
  "5-4": 180,
  "5-5": 200,
  "5-6": 200,
  "5-7": 200,
};

export const CleaningCalculator = () => {
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [propertyType, setPropertyType] = useState<"Apartment" | "House">(
    "Apartment"
  );

  const notify = (message: string) => toast(message);

  const handleBedroomChange = (increment: boolean) => {
    setBedrooms((prev) => {
      const newBedrooms = increment
        ? Math.min(prev + 1, 5)
        : Math.max(prev - 1, 1);
      // Auto-decrease bathrooms if necessary
      if (newBedrooms === 1) setBathrooms(1);
      if (newBedrooms === 2 && bathrooms > 2) setBathrooms(2);
      if (newBedrooms === 3 && bathrooms > 3) setBathrooms(3);
      if (newBedrooms === 4 && bathrooms > 5) setBathrooms(5);
      return newBedrooms;
    });
  };

  const handleBathroomChange = (increment: boolean) => {
    setBathrooms((prev) => {
      const maxBathrooms =
        bedrooms === 1
          ? 1
          : bedrooms === 2
          ? 2
          : bedrooms === 3
          ? 3
          : bedrooms === 4
          ? 5
          : 7;
      return increment
        ? Math.min(prev + 1, maxBathrooms)
        : Math.max(prev - 1, 1);
    });
  };

  const getPrice = () => {
    const key = `${bedrooms}-${bathrooms}`;
    return prices[key] || "N/A";
  };

  const handlePropertyTypeChange = (type: "Apartment" | "House") => {
    setPropertyType(type);
  };

  return (
    <div className="card">
      <section className="calculator-container">
        <div className="description-container">
          <h2>
            Recurring clean
            <br /> pricing calculator
          </h2>
          <p>
            Easily calculate your recurring cleaning costs. Enter your details
            for a fast, transparent price.
          </p>
          <button
            onClick={() => {
              notify("Cleaning booked!");
            }}
          >
            Book a clean
          </button>
        </div>

        <div className="inner-calc-container">
          <div className="property-type-switcher">
            <button
              onClick={() => handlePropertyTypeChange("Apartment")}
              className={`${
                propertyType === "Apartment" ? "active" : "inactive"
              } left`}
            >
              Apartment
            </button>
            <button
              onClick={() => handlePropertyTypeChange("House")}
              className={`${
                propertyType === "House" ? "active" : "inactive"
              } right`}
            >
              House
            </button>
          </div>

          <hr className="divider"></hr>

          <div className="controllers">
            <div className="controller">
              <h3>Bedrooms</h3>
              <div className="controller-buttons">
                <button
                  onClick={() => handleBedroomChange(false)}
                  disabled={bedrooms === 1}
                >
                  -
                </button>
                <h2 className="controller-value">{bedrooms}</h2>
                <button
                  onClick={() => handleBedroomChange(true)}
                  disabled={bedrooms === 5}
                >
                  +
                </button>
              </div>
            </div>

            <div className="controller">
              <h3>Bathrooms</h3>
              <div className="controller-buttons">
                <button
                  onClick={() => handleBathroomChange(false)}
                  disabled={bathrooms === 1}
                >
                  -
                </button>
                <h2 className="controller-value">{bathrooms}</h2>
                <button
                  onClick={() => handleBathroomChange(true)}
                  disabled={
                    bathrooms ===
                    (bedrooms === 1
                      ? 1
                      : bedrooms === 2
                      ? 2
                      : bedrooms === 3
                      ? 3
                      : bedrooms === 4
                      ? 5
                      : 7)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="price">
            <h2>Price: ${getPrice()}</h2>
          </div>
        </div>
      </section>
    </div>
  );
};
