import React from "react";
import IIcons from "./";

export default function ICheck(props:IIcons) {
   
   const { size, border, color } = props;
   return (
      <svg
         width={size ? size : 24}
         height={size ? size : 24}
         viewBox="0 0 24 24"
         fill="none"
         stroke={color ? color : "#000"}
         strokeWidth={border ? border : 2}
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
   )
}