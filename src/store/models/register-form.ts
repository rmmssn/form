import { Action, State, Computed, action, computed } from "easy-peasy";

export interface RegisterFormModel {
   fullName: string | undefined;
   role: string | undefined;
   password: string | undefined;

   // setPassword: Action<RegisterFormModel, string>;
   
   //@ts-ignore
   setFormValue: Action<RegisterFormModel, Partial<State<RegisterFormModel>>>;

   areAllFieldsFilledOut: Computed<RegisterFormModel, boolean>;
}

export const registerFormModel: RegisterFormModel = {
   fullName: undefined,
   role: undefined,
   password: undefined,

   setFormValue: action((state, payload) => {
      return {
         ...state,
         ...payload,
      }
   }),

   areAllFieldsFilledOut: computed((state) => {
      return !!(state.fullName && state.role && state.password)
   })

}
