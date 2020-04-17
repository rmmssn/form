import React, { RefCallback } from "react";
import { IRegexTest } from "../utils/regex";
import ICheck from "../icons/iCheck";
import "./inputHelper.css";

export type IInputHelperState = 'empty' | 'invalid' | 'hidden';

export interface IInputHelper {
   label: string;
   value: string;
   state?: IInputHelperState;
   isEmpty?: boolean;
   regexTest?: IRegexTest | IRegexTest[];
}

export default function InputHelper(props:IInputHelper) {
   
   const { label, value, regexTest, state } = props;
   
   
   // useRef hook to store previous state prop
   const prevStateRef = React.useRef<IInputHelperState>();
   React.useEffect(() => { prevStateRef.current = state });
   const prevState = prevStateRef.current;
   // apply delay before hidding helper if errors got fixed
   const hideWithDelay = (prevState === 'invalid' && state === 'hidden') ? true : false;
   
   console.log("prev", prevState, "current", state, "delay", hideWithDelay)

   // If input value is null show "input is required" message
   if (state === 'empty') {
      return (
         <div className="helper error">
            <span>{label + " is required" }</span>
         </div>
      )
   }

   else if ((regexTest && state === "invalid") || (regexTest && hideWithDelay)) {
      
      // Make sure the regexTest prop is an array
      const regexArr = Array.isArray(regexTest) ? regexTest : [regexTest];
      console.log("expected")
      return (
         <div className={`helper ${hideWithDelay ? "valid" : ""}`}>
            {
               // Map through test(s)
               regexArr.map((test:IRegexTest, index:number) => {
                  const isValid = test.regex.test(value);
                  
                  return (
                     <div
                     key={index}
                     className={`help-row ${isValid ? " valid" : ""}`}
                     >
                        <ICheck size={16} color={"red"} border={3}/>
                        <span>{test.description}</span>
                     </div>
                  )
               })
            }
         </div>
      )
   }
   
   else {
      console.log("else - not expected")
      return <div style={{display: "none"}}/>
   }
}