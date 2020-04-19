import React from 'react';
import Button from "../components/Button";
import Checkmark from '../icons/composed/Checkmark';
import Tile from "../components/Tile";
import { useHistory } from "react-router-dom";

export default function DonePage() {

   // Use history of "react-router-dom" to push next path
   const history = useHistory();

   function handleSubmit() {
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