import React from "react";
import { IFilledIcons, FilledDefaults } from "./";

export default function IShadow(props:IFilledIcons) {
   
   const { size, color } = props;

   return (
      <svg width={size} height={size} viewBox="0 0 24 24">
         <ellipse fill={color} cx="12" cy="12" rx="12" ry="1.2"/>
      </svg>
   )
}

IShadow.defaultProps = FilledDefaults as IFilledIcons;