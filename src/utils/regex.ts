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
         regex: /\d/
      },
      {
         description: "Must have at least 9 characters",
         regex: /^(.{9,}$)/,
      },
   ]
}

export default regex;