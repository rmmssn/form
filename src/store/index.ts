import { createStore, createTypedHooks, State, Actions, Action, action } from "easy-peasy";
import { registerFormModel, IRegisterFormModel } from "./models/register-form";


interface IStoreModel {
   reset: Action<IRegisterFormModel, Partial<State<IRegisterFormModel>>>;
   registerForm: IRegisterFormModel;
}

// Combine all Models
const model: IStoreModel = {
   reset: action((state, payload) => { return {...state, ...payload}}),
   registerForm: registerFormModel
}

// Destructure with types using createTypeHooks
export const { useStoreActions, useStoreState } = createTypedHooks<IStoreModel>();

// Create store (disable immer = immutable state)
export const store = createStore(model, {disableImmer: true});

// Get Initial state 
export const initialState:IStateModel = store.getState();

// Explicit exports of State and Actions 
export type IStateModel = State<IStoreModel>;
export type IActionModel = Actions<IStoreModel>;