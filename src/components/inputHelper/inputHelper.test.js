import React from "react";
import { render, cleanup } from "@testing-library/react";
import InputHelper from "./InputHelper";

afterEach(cleanup)

describe("input state cases", () => {
   const { queryByTestId, rerender } = render(<InputHelper state={"error"}/>)

   test("input helper renders 'error state' correctly", () => {
      expect(queryByTestId("input helper")).toHaveTextContent(/is required/i)
   });

   test("input renders only if a state is provided", () => {
      rerender(<InputHelper state={undefined}/>)
      expect(queryByTestId("input helper")).not.toBeInTheDocument()
   });
});