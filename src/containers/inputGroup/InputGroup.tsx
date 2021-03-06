import React from "react";
import { useStoreActions, IActionModel } from "../../store";
import Input, { IInput, IInputState } from "../../components/input/Input";
import InputHelper, { IInputHelper, IInputHelperState } from "../../components/inputHelper/InputHelper";
import "./inputGroup.css";

// Extend 'Input' and 'InputHelper' interfaces
export interface IInputGroup extends IInput, IInputHelper {
   value: string;
   valid?: boolean;
   showError?: boolean;
}

export default function InputGroup(props:IInputGroup) {
   
   // Destructure props
   const {
      name,
      label,
      placeholder,
      required,
      regexTest,
      value,
      valid,
      showError,
   } = props;


   // Destructure typed Action from Store
   const { setFormValue } = useStoreActions((actions:IActionModel):any => actions.registerForm);


   // onChange input handler
   function handleInputChange(event:React.FormEvent<HTMLInputElement>) {
      const target = event.target as HTMLInputElement;
      setFormValue({[target.name]: target.value.trim()});
   };


   // Local state of input's state
   const [inputState, setInputState] = React.useState<IInputState>('');

   
   // Set input helper's visibility
   const inputHasNoValue = (showError && required && !value);
   const showHelper = (regexTest && ((showError && !valid) || (inputState === "focus")));

   // Define input helper's visibility
   let helperState:IInputHelperState;

   if (inputHasNoValue) {
      helperState = "error";
   } else if (showHelper) {
      helperState = "helper";
   } else {
      helperState = undefined;
   };

   return (
      <div className="input-container">
         <Input
            name={name}
            required={required}
            label={label}
            placeholder={placeholder}
            onChange={handleInputChange}
            onFocusChange={(state:IInputState) => setInputState(state)}
         />
         <InputHelper
            label={label}
            value={value}
            state={helperState}
            regexTest={regexTest}
         /> 
      </div>
   )
}