import React from 'react';
import { StoreProvider } from "easy-peasy"
import { store } from '../store';
import Nav from "../components/nav";
import "../styles/index.css";

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Nav/>
      </div>
    </StoreProvider>
  );
}

export default App;
