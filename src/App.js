import { useState } from "react";
import "./App.css";
import Charts from "./Charts";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <main id="main">
        <div className="tracker">
          <div className="balance--logo">
            <div className="my-balance">
              <p>My balance</p>
              <h3>$921.48</h3>
            </div>
            <div className="logo">
              <svg
                width="72"
                height="48"
                viewBox="0 0 72 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <circle fill="#382314" cx="48" cy="24" r="24" />
                  <circle
                    stroke="#FFF"
                    strokeWidth="2"
                    cx="24"
                    cy="24"
                    r="23"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <div className="kk">
            <h3 className="title">Spending - Last 7 days</h3>
            <div className="bar-chart">
              {data.map((item, index) => {
                return (
                  <Charts
                    amount={item.amount}
                    day={item.day}
                    key={index}
                    show={item.hover}
                  />
                );
              })}
            </div>

            <div className="line"></div>
            <div className="total-analysis">
              <div className="this-month">
                <p>Total this month</p>
                <h3>$478.33</h3>
              </div>
              <div className="growth">
                <p className="growth-rate">+2.4%</p>
                <p className="prev">from last month</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
