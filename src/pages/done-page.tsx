import React from 'react';
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function DonePage() {
   return (
      <>
         <h1>Done Page</h1>
         <Link to="/"><Button label="Restart"/></Link>
      </>
   )
}