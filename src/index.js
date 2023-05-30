import React from "react";
import ReactDOM from "react-dom/client";
// import Tarjeta from './Props';
// import Button from './DefaultProps';
import { TaskCard, Navbar } from "./components/Task";
import Button from "./components/DefaultProps";
import {Input} from "./components/Inputs"
import {Card1} from "./components/Card"

const root = ReactDOM.createRoot(document.getElementById("root"));

const names = [
  {
    id: 1,
    name:'Dan Angles',
    age: 23
  },
  {
    id: 2,
    name:'Azriel Soberano',
    age: 23
  }
];

root.render(
  <>
    {/* <Navbar ready={true} />
    <TaskCard />
    <Button text="Nose"></Button> */}
    <Card1 data={names[0]}/>
    {/* <Input/> */}
  </>
);
