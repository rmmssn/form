// Check for input errors
// const regex = {
//    // 'Letters' & 'Spaces' (min: 1)
//    lettersSpace: (/^[a-zA-Z.'-]+(?: +[a-zA-Z.'-]+)+$/),

   
//    /* Must 
//    ** - start with a letter
//    ** - contain a '@'
//    ** - finish with a '.' + min:2 & max:4 'letters'
//    */
//    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/,
//    password: {
//       // Minimum 9 chars long
//       lengthNineChars: /^(.{9,}$)/,

//       // Contain 'lowercase' & 'uppercase'
//       lowercaseUppercase: /^(?=.*[a-z])(?=.*[A-Z])/,

//       // Include 'number(s)' & 'letter(s)'
//       lettersNumbers: /^[\w\d\S]*$/
//    }
// }

// export default regex;

export type IRegexTest = { description: string, regex: RegExp }

interface IRegex {
   email: IRegexTest;
   password: IRegexTest[];
}

const regex:IRegex = {
   email: {
      description: "Must be a valid email address",
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
   },
   password: [
      {
         description: "Contains uppercase and lowercase letters",
         regex: /^(?=.*[a-z])(?=.*[A-Z])/,
      },
      {
         description: "Contains a number",
         // regex: /^[\w\d\S]*$/
         regex: /\d/
      },
      {
         description: "Must have at least 9 characters",
         regex: /^(.{9,}$)/,
      },
   ]
}

export default regex;