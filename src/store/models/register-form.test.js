import { createStore } from "easy-peasy";
import { registerFormModel } from "./register-form";


test("computed values check for empty values correctly", () => {
   const store = createStore(registerFormModel)
   // checking against default model with only empty values
   expect(store.getState().fullnameIsValid).toBe(false)
   expect(store.getState().emailIsValid).toBe(false)
   expect(store.getState().passwordIsValid).toBe(false)
})

/*
** Test that a fullname is provided
*/
test("detects missing fullname", () => {
   const state = registerFormModel
   state.fullname = ""
   const store = createStore(state)
   expect(store.getState().fullnameIsValid).toBe(false)
})

/*
** Test that email is of right format
*/
describe("detects email", () => {
   test("email has no '@'", () => {
      const state = registerFormModel
      state.email = "email#example.com"
      const store = createStore(state)
      expect(store.getState().emailIsValid).toBe(false)
   })

   test("email is missing extension", () => {
      const state = registerFormModel
      state.email = "email@example"
      const store = createStore(state)
      expect(store.getState().emailIsValid).toBe(false)
   })

   test("email has incomplete extension", () => {
      const state = registerFormModel
      state.email = "email@example.c"
      const store = createStore(state)
      expect(store.getState().emailIsValid).toBe(false)
   })

   test("email starts with a wrong character", () => {
      const state = registerFormModel
      state.email = ".email@example.com"
      const store = createStore(state)
      expect(store.getState().emailIsValid).toBe(false)
   })

   test("email includes a wrong character", () => {
      const state = registerFormModel
      state.email = "email.@example.com"
      const store = createStore(state)
      expect(store.getState().emailIsValid).toBe(false)
   })

   test("email is valid", () => {
      const state = registerFormModel
      state.email = "email@example.com"
      const store = createStore(state)
      expect(store.getState().emailIsValid).toBe(true)
   })  
})

/*
** Test that password is of right format
*/
describe("detects password", () => {
   test("password is too short", () => {
      const state = registerFormModel
      state.password= "passW123"
      const store = createStore(state)
      expect(store.getState().passwordIsValid).toBe(false)
   })
   
   test("password has no number", () => {
      const state = registerFormModel
      state.password= "passWordNaN"
      const store = createStore(state)
      expect(store.getState().passwordIsValid).toBe(false)
   })

   test("password has no lowercase letter", () => {
      const state = registerFormModel
      state.password= "PASSWORD123"
      const store = createStore(state)
      expect(store.getState().passwordIsValid).toBe(false)
   })

   test("password has no uppercase letter", () => {
      const state = registerFormModel
      state.password= "password123"
      const store = createStore(state)
      expect(store.getState().passwordIsValid).toBe(false)
   })

   test("password is valid", () => {
      const state = registerFormModel
      state.password= "passWord123"
      const store = createStore(state)
      expect(store.getState().passwordIsValid).toBe(true)
   })
})