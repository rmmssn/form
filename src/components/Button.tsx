import React from "react";
import "./button.css";

interface IButton {
   label: string;
}

export default function Button(props:IButton) {
   return (
      <button>{props.label}</button>
   )
}