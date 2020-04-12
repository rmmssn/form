import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy"
import { store } from '../store';
import Nav from "../components/nav";
import "../styles/index.css";
import { UserPage } from '../pages/user-page';
import { PrivacyPage } from '../pages/privacy-page';
import { DonePage } from '../pages/done-page';

function App() {
  return (
     <BrowserRouter>
         <StoreProvider store={store}>
            <div className="App">
               <Nav/>
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

export default App;
