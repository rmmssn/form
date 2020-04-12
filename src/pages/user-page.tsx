import React from 'react';
import { useStoreActions, useStoreState, IActionModel } from "../store";

export const UserPage = () => {
   const { setFormValue } = useStoreActions((actions:IActionModel):any => actions.registerForm)
   const { password, areAllFieldsFilledOut } = useStoreState(state => state.registerForm)

   return (
      <div className="page">
         <h1>User Page</h1>

         <div onClick={() => setFormValue({password:"New value"})}>
               Set Password { password } { areAllFieldsFilledOut.toString() }
         </div>
      </div>
   )
}