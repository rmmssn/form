import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

test("input renders correctly", () => {
   const { queryByPlaceholderText } = render(<Input/>)
   expect(queryByPlaceholderText("Type here")).toBeTruthy()
});

test("input receive focus", () => {
   const { queryByPlaceholderText } = render(<Input/>)
   const input = queryByPlaceholderText('Type here')
   input.focus()
   expect(input).toHaveFocus()
});

test("input value updates on change", () => {
   const { queryByPlaceholderText } = render(<Input/>)
   const input = queryByPlaceholderText('Type here')
   fireEvent.change(input, { target: {value: "test value"} })
   expect(input.value).toBe("test value")
});

