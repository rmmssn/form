import React from 'react';
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

export default function PrivacyPage() {

   // Use history of "reacr-router-dom" to push next path
   const history = useHistory();

   function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      history.push("/done")
   }

   return (
      <>
         <h1>Privacy Page</h1>
         <form onSubmit={handleSubmit}>
            <Button label="Submit"/>
         </form>
      </>
   )
}