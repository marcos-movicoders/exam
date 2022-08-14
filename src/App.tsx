import { Container } from "inversify";
import React from "react";
import ReactDOM from "react-dom";
import './App.css';

export const App = <>Hello world!</>

export function runApp(container: Container) {
  ReactDOM.render(App
    ,document.getElementById("root")
  );
}