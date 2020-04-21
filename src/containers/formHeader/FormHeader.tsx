import * as React from "react";
import { useLocation } from "react-router-dom";
import Pages, { IPage } from "../../pages/data";
import "./formHeader.css";

export default function FormHeader() {

   /*
   ** Store a reversed version of Pages[] in a Ref
   ** to be mapped in the correct order
   */
   const reversePages = React.useRef<IPage[]>();
   if (!reversePages.current) {
      reversePages.current = Pages.reverse();
   }

   // Get current location
   const currentLocation = useLocation().pathname;

   return (
      <div className="form-header">
         
         <div className="steps">
         {
            reversePages.current.map((page:IPage, index:number) => {
               // Determine if current item should be active
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