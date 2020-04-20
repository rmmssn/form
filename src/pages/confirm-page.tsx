import React from 'react';
import Button from "../components/Button";
import Checkmark from '../icons/composed/Checkmark';
import Tile from "../components/Tile";
import { useHistory } from "react-router-dom";
import { useStoreActions, IActionModel, initialState, useStoreState, IStateModel } from '../store';

export default function CoinfirmPage() {

   // Use history of "react-router-dom" to push next path
   const history = useHistory();

   // reset Store Action (use initialState from store/index.ts)
   const { reset } = useStoreActions((action:IActionModel):any => action);

   // Deconstruct State from store
   const {
      fullname,
      role,
      email,
      password,
      updatesSubscribe,
      communicationSubscribe 
   } = useStoreState((state:IStateModel):any => state.registerForm );

   // Collected Data
   const data = {
      fullname: fullname,
      role: role,
      email: email,
      password: password,
      updatesSubscribe: updatesSubscribe,
      communicationSubscribe: communicationSubscribe
   }

   // Reset State and go back to root path
   function handleSubmit() {
      console.log("Collected Data:", JSON.stringify(data, null, '\t'));
      reset(initialState);
      history.push("/");
   }

   return (
      <div>
         <h1 style={{textAlign: "center", fontWeight: 400}}>All Done!</h1>
         
         <Checkmark/>

         <Tile>
            Please verify your email address, you should have received an email from us!
         </Tile>

         <Button align={"center"} onClick={handleSubmit}>Finish</Button>
      </div>
   )
}