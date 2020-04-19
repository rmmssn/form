import React from "react";
import { IRegexTest } from "../utils/regex";
import ICheck from "../icons/iCheck";
import "./inputHelper.css";

export type IInputHelperState = 'error' | 'helper' | undefined;

export interface IInputHelper {
   label: string;
   value: string;
   state?: IInputHelperState;
   regexTest?: IRegexTest | IRegexTest[];
}

export default function InputHelper(props:IInputHelper) {

   const { label, value, regexTest, state } = props;
   

   const Content = () => {

      // Display error message if input is empty
      if (state === 'error') {
         return <span>{label + " is required" }</span>
      }

      // Make sure the regexTest prop is an array
      const regexArr = Array.isArray(regexTest!) ? regexTest! : [regexTest!];
      
      // Otherwise display helper(s)
      return (
         <React.Fragment>
         {  
            regexTest && regexArr.map((test:IRegexTest, index:number) => {
               // Test input value for each regexTest
               const isValid = test.regex.test(value);
               
               return (
                  <div key={index} className={isValid ? "valid" : ""}>
                     <ICheck size={16} border={3}/>
                     <span>
                        {test.description}
                     </span>
                  </div>
               )
            })
         }
         </React.Fragment>
      )
   }

   if (state !== undefined) {
      return (
         <div className={`helper ${state === 'error' ? 'error' : ''}`}>
            <Content/>
         </div>
      )
   } else {
      return <div style={{display: "none"}}/>
   }
}