import React from "react";
import "./checkbox.css";
import ICheck from "../../icons/iCheck";

interface ICheckbox extends React.HTMLAttributes<HTMLSpanElement>{
   checked: boolean;
   onClick?: () => void;
}

export default function Checkbox(props:ICheckbox) {

   const checkboxRef = React.createRef<HTMLSpanElement>();
   const [checkedState, setCheckedState] = React.useState(false);

   document.addEventListener("keydown", function(e:KeyboardEvent) {
      // Handle Toggling using the "Enter" key if checkbox is focused
      if (e.key === "Enter" && (document.activeElement === checkboxRef.current)) {
         (props.onClick && props.onClick()) || setCheckedState(prev => !prev);
      }
   });

   function handleClick() {
      // Prevent focus on click
      checkboxRef.current && checkboxRef.current.blur();
      (props.onClick && props.onClick()) || setCheckedState(prev => !prev);
   }

   /*
   ** use different state depending on if the component is being
   ** controlled by its parent through props
   */ 
   const state = props.onClick ? props.checked : checkedState;

   return (
      <span
         ref={checkboxRef}
         tabIndex={0}
         className={`checkbox ${state ? "selected" : ""}`}
         onClick={handleClick}
         data-testid="checkbox"
      >
         <ICheck color={"#FFF"} border={3} size={18}/>
      </span>
   )
}

Checkbox.defaultProps = {
   checked: false
} as ICheckbox;