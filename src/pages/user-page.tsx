import React from 'react';
import { useStoreState, IStateModel } from "../store";
import InputContainer, { IInputContainer } from "../containers/InputContainer";
import Button from "../components/Button";
import regex from "../utils/regex";
import { useHistory } from "react-router-dom";

export default function UserPage() {

   // Destructure typed State from Store
   const {
      fullname,
      fullnameIsValid,
      role,
      email,
      emailIsValid,
      password,
      passwordIsValid,
      allFieldsAreValid
   } = useStoreState((state:IStateModel):any => state.registerForm);

   // Inputs data
   const inputs:IInputContainer[] = [
      {  
         name: "fullname",
         label: "Full Name",
         placeholder: "Your Full Name",
         required: true,
         value: fullname,
         valid: fullnameIsValid,
      },
      {
         name: "role",
         label: "Role",
         placeholder: "e.g. Software Engineer",
         required: false,
         value: role,
         valid: true,
      },
      {
         name: "email",
         label: "Email",
         required: true,
         value: email,
         valid: emailIsValid,
         placeholder: "Your email address",
         regexTest: regex.email,
      },
      {
         name: "password",
         label: "Password",
         required: true,
         value: password,
         valid: passwordIsValid,
         placeholder: "Define password",
         regexTest: regex.password
      }
   ];

   // Hide input helpers until first submit
   const [showErrors, setShowErrors] = React.useState(false);

   // Use history of "reacr-router-dom" to push next path
   const history = useHistory();
   // Form submit handler
   function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      // Check if all inputs are ok with computed value from Store
      if (allFieldsAreValid) {
         console.log("submit");
         history.push("/privacy")
      } else {
         console.log("don't submit");
         // Show input helpers after failed submit
         setShowErrors(true);
      }
   }

   return (
      <form onSubmit={handleSubmit} noValidate>
         { 
            inputs.map((input:IInputContainer) => {
               return (
                  <InputContainer
                     key={input.name}
                     name={input.name}
                     label={input.label}
                     placeholder={input.placeholder}
                     required={input.required}
                     regexTest={input.regexTest}
                     value={input.value}
                     valid={input.valid}
                     showError={showErrors}
                  />
               )
            })
         }
         <Button label="Next"/>
      </form>
   )
}