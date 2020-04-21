import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("button renders correctly", () => {
   const { queryByText } = render(<Button/>)
   expect(queryByText("Button")).toBeTruthy()
})

test("button fires click event", () => {
   const handleClick = jest.fn()
   const { queryByText } = render(<Button onClick={handleClick}/>)
   fireEvent.click(queryByText("Button"))
   expect(handleClick).toHaveBeenCalledTimes(1)
})