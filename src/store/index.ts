import { createStore, createTypedHooks, State, Actions } from "easy-peasy";
import { RegisterFormModel, registerFormModel } from "./models/register-form";


interface StoreModel {
   registerForm: RegisterFormModel
}

// combine all models for store creation
const model: StoreModel = {
   registerForm: registerFormModel
}

// destructure hooks to get StoreModel types
export const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>();

// disableImmer to allow returning new states
export const store = createStore(model, {disableImmer: true });

// explicit export of State and Action 
export type IStateModel = State<StoreModel>;
export type IActionModel = Actions<StoreModel>;

