import React from "react";
import { IBorderedIcons, BorderedDefaults } from "./";

export default function ICheck(props:IBorderedIcons) {
   
   const { size, border, color } = props;
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         stroke={color}
         strokeWidth={border}
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
   )
}

ICheck.defaultProps = BorderedDefaults as IBorderedIcons;