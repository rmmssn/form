import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy"
import { store } from '../store';
import Pages, { IPage } from "../pages/data";
import FormHeader from "./FormHeader";
import "../design-tokens/tokens.css";
import "./app.css";

export default function App() {
  return (
     <BrowserRouter>
         <StoreProvider store={store}>
            <div className="app">
               <FormHeader/>
               <Switch>
                  { 
                     Pages.map((page:IPage) => {
                        return <Route key={page.path} path={page.path} component={page.component}/>
                     }) 
                  }
               </Switch>
            </div>
         </StoreProvider>
    </BrowserRouter>
  );
}
