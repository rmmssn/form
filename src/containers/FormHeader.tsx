import * as React from "react";
import { useLocation } from "react-router-dom";
import Pages, { IPage } from "../pages/data";
import "./formHeader.css";

export default function FormHeader() {

   // Get current location
   // i.e. "/privacy" => "privacy"
   const currentLocation = useLocation().pathname;
   
   // Store a reversed version of Pages[] in a Ref
   const reversePages = React.useRef<IPage[]>();
   if (!reversePages.current) {
      reversePages.current = Pages.reverse();
   }

   return (
      <div className="form-header">
         
         <div className="steps">
         {
            reversePages.current.map((page:IPage, index:number) => {
               const isActive = currentLocation === page.path;

               return (
                  <div key={page.path} className={`step ${isActive ? "active" : ""}`}>
                     <span>{`${index + 1}. ${page.name}`}</span>
                  </div>
               )
            })
         }
         </div>

      </div>
   )
}