import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import EditTodoPage from "../pages/EditTodoPage";
import ContactUs from "../pages/ContactUs";

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact-us" component={ContactUs}/>
        <Route exact path="/edit/:id" component={EditTodoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </section>
  );
};

export default Routes;
