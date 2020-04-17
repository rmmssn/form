import { createStore, createTypedHooks, State, Actions } from "easy-peasy";
import { registerFormModel, IRegisterFormModel } from "./models/register-form";


interface StoreModel {
   registerForm: IRegisterFormModel
}

// Combine all models for store creation
const model: StoreModel = {
   registerForm: registerFormModel
}

// Destructure with types using createTypeHooks
export const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>();

// Create store (disable immer = immutable state)
export const store = createStore(model, {disableImmer: true});

// Explicit exports of State and Actions 
export type IStateModel = State<StoreModel>;
export type IActionModel = Actions<StoreModel>;