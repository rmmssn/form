import * as React from "react";
import { useStoreActions, useStoreState, IActionModel } from "../store";

const Nav = () => {
   const { setFormValue } = useStoreActions((actions:IActionModel):any => actions.registerForm)
   const { password, areAllFieldsFilledOut } = useStoreState(state => state.registerForm)
   
   return (
      <div className="nav">
         <h1>Nav Component</h1>
         <div onClick={() => setFormValue({password:"New value"})}>
            Set Password { password } { areAllFieldsFilledOut.toString() }
         </div>
      </div>
   )
}

export default Nav;