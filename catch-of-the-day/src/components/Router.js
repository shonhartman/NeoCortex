import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListSelector from "./ListSelector";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ListSelector} />
            <Route path="/list/:listId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;