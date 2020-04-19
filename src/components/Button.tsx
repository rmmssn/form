import React from "react";
import "./button.css";

interface IButton {
   children: React.ReactText;
   align: "left" | "center" | "right";
   type: "button" | "submit" | "reset";
   onClick: () => void;
}


export default function Button(props:IButton) {

   const { children, align, type, onClick} = props;

   return (
      <button className={align} onClick={onClick && onClick} type={type}>
         {children}
      </button>
   )
}

Button.defaultProps = {
   children: "Button",
   align: "right",
   type: "submit",
} as IButton;