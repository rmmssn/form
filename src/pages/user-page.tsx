import React from 'react';
import { useStoreState, IStateModel } from "../store";
import InputContainer, { IInputContainer } from "../containers/InputContainer";
import Button from "../components/Button";
import regex from "../utils/regex";
import { useHistory } from "react-router-dom";


// TODO:
// - Focus on first failed input
// - if not all inputs are filled, enter doesn't submit, but moves to next one
// - If input value is just a space (Role), convert value to undefined. .trim()


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
      },
      {
         name: "email",
         label: "Email",
         placeholder: "Your email address",
         required: true,
         value: email,
         valid: emailIsValid,
         regexTest: regex.email,
      },
      {
         name: "password",
         label: "Password",
         placeholder: "Define password",
         required: true,
         value: password,
         valid: passwordIsValid,
         regexTest: regex.password
      }
   ];

   // Hide input helpers until first submit
   const [showErrors, setShowErrors] = React.useState(false);

   // Use history of "react-router-dom" to push next path
   const history = useHistory();

   // Submit handler
   function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      // Check against Store computed value
      if (allFieldsAreValid) {
         history.push("/privacy")
      } else {
         // Show input helpers after first submit failure
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
                     valid={input.valid!}
                     showError={showErrors}
                  />
               )
            })
         }
         <Button>Continue</Button>
      </form>
   )
}