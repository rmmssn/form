import { Action, State, Computed, action, computed } from "easy-peasy";
import regex, { IRegexTest } from "../../utils/regex";

// RegisterFormModel types used in Store
export interface IRegisterFormModel {
   // Input values
   fullname: string;
   role: string;
   email: string;
   password: string;
   updatesSubscribe: boolean;
   communicationSubscribe: boolean;

   // Actions to update Store
   setFormValue: Action<IRegisterFormModel, Partial<State<IRegisterFormModel>>>;
   
   // Computed values from Store
   fullnameIsValid: Computed<IRegisterFormModel, boolean>;
   emailIsValid: Computed<IRegisterFormModel, boolean>;
   passwordIsValid: Computed<IRegisterFormModel, boolean>;
   allFieldsAreValid: Computed<IRegisterFormModel, boolean>;
}


export const registerFormModel: IRegisterFormModel = {
   // Default input values
   fullname: '',
   role: '',
   email: '',
   password: '',
   updatesSubscribe: true,
   communicationSubscribe: false,

   // Update Store values
   setFormValue: action((state, payload) => {
      return { ...state, ...payload }
   }),

   /*
   ** Computed values
   ** return Booleans
   */

   // fullname: value !== null
   fullnameIsValid: computed((state) => {
      return (!!(state.fullname));
   }),

   // email: value vs regex
   emailIsValid: computed((state) => {
      return (
         !!(state.email &&
         regex.email.regex.test(state.email))
      );
   }),

   // password: value vs regex
   passwordIsValid: computed((state) => {
      return (
         !!(state.password &&
         regex.password.map((test:IRegexTest) => test.regex.test(state.password)
         ).reduce((total:boolean, result:boolean) => total && result ))
      );
   }),

   // all ok? Uses each previous computed values 
   allFieldsAreValid: computed((state) => {
      return !!(state.fullnameIsValid && state.emailIsValid && state.passwordIsValid)
   })

}
