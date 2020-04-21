import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";


test("checkbox renders correctly", () => {
   const { queryByTestId } = render(<Checkbox />)
   expect(queryByTestId("checkbox")).toBeTruthy()
});

test("checkbox fires click Event", () => {
   const onClick = jest.fn()
   const { queryByTestId } = render(<Checkbox onClick={onClick}/>)
   const checkbox = queryByTestId("checkbox")
   fireEvent.click(checkbox)
   expect(onClick).toHaveBeenCalledTimes(1)
});

/*
** Test that checkbox gets focused and that
** pressing "Enter" toggles it
*/

test("checkbox receives focus", () => {
   const { queryByTestId } = render(<Checkbox />)
   const checkbox = queryByTestId("checkbox")
   checkbox.focus()
   expect(checkbox).toHaveFocus()
});

test('checkbox gets toggled with enter key', () => {
   const { queryByTestId } = render(<Checkbox/>)
   const checkbox = queryByTestId("checkbox")
   checkbox.focus()
   fireEvent.keyDown(checkbox, {key: "Enter", Code: "Enter", bubbles: true})
   expect(checkbox).toHaveClass("selected")
});
