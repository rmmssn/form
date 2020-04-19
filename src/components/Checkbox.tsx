import React from "react";
import "./checkbox.css";
import ICheck from "../icons/iCheck";

interface ICheckbox extends React.HTMLAttributes<HTMLSpanElement>{
   checked: boolean;
   onChange?: () => void;
}

export default function Checkbox(props:ICheckbox) {

   const checkboxRef = React.createRef<HTMLSpanElement>();

   document.addEventListener("keydown", function(e:KeyboardEvent) {
      // Handle Toggling using the "Enter" key if checkbox is focused
      if (e.key === "Enter" && (document.activeElement === checkboxRef.current)) {
         props.onChange && props.onChange();
      }
   });

   function handleClick() {
      // Prevent focus on click
      checkboxRef.current && checkboxRef.current.blur();
      props.onChange && props.onChange();
   }

   return (
      <span
         ref={checkboxRef}
         tabIndex={0}
         className={`checkbox ${props.checked ? "selected" : ""}`}
         onClick={handleClick}
         {...props}
      >
         <ICheck color={"#FFF"} border={3} size={18}/>
      </span>
   )
}

Checkbox.defaultProps = {
   checked: false
} as ICheckbox;