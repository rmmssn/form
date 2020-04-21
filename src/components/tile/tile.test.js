import React from "react";
import { render, cleanup } from "@testing-library/react";
import Tile from "./Tile";

afterEach(cleanup);

test("tile renders correctly", () => {
   const { getByText } = render(<Tile/>);
   expect(getByText(/Tile content/i)).toBeTruthy();
})

test("tile receives the '.link' class when a onClick props is provided ", () => {
   const { getByText } = render(<Tile onClick={() => true}/>);
   expect(getByText(/Tile content/i)).toHaveClass("link");
})