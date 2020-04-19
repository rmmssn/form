import * as React from "react";
import "./formHeader.css";

interface IItem {
   nbr: number;
   label: string;
}

function Item(props:IItem) {
   return (
      <div className="form-step">
         <span>{props.nbr}</span>
         <span>{props.label}</span>
      </div>
   )
}

const steps = ["User", "Privacy", "Done"];

export default function FormHeader() {
   return (
      <div className="form-header">
         <div className="steps">
         {
            steps.map((step:string, index:number) => {
               return <Item key={step} nbr={index + 1} label={step}/>
            })
         }
         </div>
         <span/>
      </div>
   )
}