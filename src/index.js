import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import Authors from "./Pages/Authors/Authors";
import Books from "./Pages/Books/Books";
import NewAuthor from "./Pages/NewAuthor/NewAuthor";

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/bibli-pop/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/authors" component={Authors} />
      <Route path="/books" component={Books} />
      <Route path="/newauthor" component={NewAuthor} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
