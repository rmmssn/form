import React from 'react';
import Button from "../components/button/Button";
import { useHistory } from "react-router-dom";
import Checkbox from '../components/checkbox/Checkbox';
import Tile from "../components/tile/Tile";
import { useStoreActions, useStoreState, IStateModel, IActionModel } from "../store";

export default function PrivacyPage() {

   // Use history of "react-router-dom" to push next path
   const history = useHistory();

   function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      history.push("/confirm")
   }

   const { setFormValue } = useStoreActions((action:IActionModel):any => action.registerForm);
   const { updatesSubscribe, communicationSubscribe } = useStoreState((state:IStateModel):any => state.registerForm);


   function setUpdatesStoreValue() {
      setFormValue({"updatesSubscribe": !updatesSubscribe});
   }

   function setCommunicationStoreValue() {
      setFormValue({"communicationSubscribe": !communicationSubscribe});
   }

   
   return (
      <form onSubmit={handleSubmit}>
         <Tile
            variation={updatesSubscribe ?  "primary" : "secondary"}
            onClick={setUpdatesStoreValue}
         >
            <React.Fragment>
               <Checkbox
                  checked={updatesSubscribe}
                  onClick={setUpdatesStoreValue}
                  style={{marginBottom: 8}}
               />
               Receive updates about Tray.io product by email
            </React.Fragment>
         </Tile>

         <Tile
            variation={communicationSubscribe ?  "primary" : "secondary"}
            onClick={setCommunicationStoreValue}
         >
            <React.Fragment>
               <Checkbox
                  checked={communicationSubscribe}
                  onClick={setCommunicationStoreValue}
                  style={{marginBottom: 8}}
               />
               Receive communication by email for other products created by the Tray.io team
            </React.Fragment>
         </Tile>

         <Button>Submit</Button>
      </form>
   )
}