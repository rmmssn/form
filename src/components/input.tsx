import * as React from "react";
import "./input.css";

export type IInputState = '' | 'hover' | "focus";

export interface IInput {
   name: string;
   label: string;
   required: boolean | undefined;
   placeholder?: string;
   onChange?: (e:React.FormEvent<HTMLInputElement>) => void;
   onFocusChange?: (state:IInputState) => void;
}

const Input = ((props:IInput) => {

   const { label, name, required, placeholder, onChange, onFocusChange } = props;

   const inputType = () => {
      if (name === "password" || name === "email") return name;
      else return "text";
   }

   // Local state for input's state
   const [inputState, setInputState] = React.useState<IInputState>('')

   const handleOnFocusChange = (state:IInputState) => {
      if (inputState !== state) {
         setInputState(state);
         onFocusChange && onFocusChange(state);
      }
   }

   return (
      <React.Fragment>
         <label htmlFor={name}>{label}:{required && <span>*</span>}</label>   
         <input
            name={name}
            required={required}
            type={inputType()}
            placeholder={placeholder && placeholder}
            onChange={onChange}
            onBlur={() => handleOnFocusChange('')}
            onMouseEnter={() => inputState !== 'focus' && setInputState('hover')}
            onMouseLeave={() => inputState !== 'focus' && setInputState('')}
            onFocus={() => handleOnFocusChange('focus')}
         />
         <span className={inputState}/>
      </React.Fragment>
   )
})

export default Input;