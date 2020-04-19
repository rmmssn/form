import React from "react"
import ICheck from '../iCheck';
import IShadow from '../iShadow';
import "./checkmark.css";

export default function Checkmark() {
   return (
      <div className="checkmark">
         <span>
            <ICheck size={40} border={3} color={"#FFF"}/>
         </span>
         <IShadow/>
      </div>
   )
}