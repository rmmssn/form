import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy"
import { store } from '../store';

import FormHeader from "../components/FormHeader";
import UserPage from '../pages/user-page';
import PrivacyPage from '../pages/privacy-page';
import DonePage from '../pages/done-page';

import "./app.css";

export default function App() {
  return (
     <BrowserRouter>
         <StoreProvider store={store}>
            <div className="app">
               <FormHeader/>
               <Switch>
                  <Route path="/done">
                     <DonePage />
                  </Route>
                  <Route path="/privacy">
                     <PrivacyPage />
                  </Route>
                  <Route path="/">
                     <UserPage />
                  </Route>
               </Switch>
            </div>
         </StoreProvider>
    </BrowserRouter>
  );
}
