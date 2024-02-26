import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const ctx = new (window.AudioContext || window.webkitAudioContext)();
const osc = ctx.createOscillator();
osc.connect(ctx.destination);
console.log(ctx.state);
const root = ReactDOM.createRoot(document.getElementById("root"));
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  ctx.resume().then(() => console.log(ctx.state));
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
