import React from "react";
import ReactDOM from "react-dom/client";
// import Tarjeta from './Props';
// import Button from './DefaultProps';
import { TaskCard, Navbar } from "./components/Task";
import Button from "./components/DefaultProps";
import {Input} from "./components/Inputs"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar ready={true} />
    <TaskCard />
    <Button text="Nose"></Button>
    <Input/>
  </>
);
